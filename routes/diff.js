var Monitor = require("../page-monitor");
var fs = require('fs');
var path = require("path");
var util = require("../util");
var config = {
    page: {
        viewportSize: {
            width: 1024,
            height: 768
        },
        settings: {
            resourceTimeout: 20000,
            userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36"
        }
    },
    path: {
        root: path.join(process.cwd(), "temp"), // data and screenshot save path root
    },
    render: {
        format: 'jpeg',     // @see http://phantomjs.org/api/webpage/method/render.html
        quality: 60,        // @see http://phantomjs.org/api/webpage/method/render.html
        ext: 'jpg',         // the same as format, if not specified
    },
    walk: {
        excludeSelectors: []
    }
};


module.exports = function (app) {
    /* GET home page. */
    var db = app.get("db"),
        Mon = db.model("Mon"),
        Task = db.model("Task"),
        gridfs = app.get('gridfs');
    app.route("/diff").post(function (req, res) {
        var taskId = req.body.taskId;
        Task.findById(taskId).then(function (task) {
            config.walk.excludeSelectors = task.diffRules;
            console.log(task);
            var monitor = new Monitor(task.url, config);
            monitor.on('debug', function (data) {
                console.log('[DEBUG] ' + data);
            });
            monitor.on('error', function (data) {
                console.error('[ERROR] ' + data);
            });

            var basedir, // 截图文件的目录
                tree, // tree.json ObjectId
                info, // info.json ObjectId
                screenShot, // screenShot.jpg ObjectId
                diffPic, // diff picture ObjectId
                timestamp; // 时间戳

            if (!task.base) { // 没有基准页面
                var files = ["tree.json", "info.json", "screenShot.jpg"];
                monitor.capture(function (code) {
                    if (code != 0) {
                        res.json({
                            status: -1,
                            errInfo: monitor.log.error
                        })
                        return;
                    }
                    monitor.log.debug.forEach(function (value, index) {
                        if (/save capture /.test(value)) {
                            basedir = value.match(/\[(.*)\]/)[1];
                        }
                    });
                    if(!basedir) {
                        res.json({
                            status: -1,
                            errInfo: monitor.log.error
                        });
                        return;
                    }
                    timestamp = parseInt(path.parse(basedir).name);
                    task.base = new Date(timestamp);
                    Promise.all(files.map(function (filename) {
                        return util.saveToGridFS(gridfs, filename, path.join(basedir, filename));
                    }))
                        .then(function (files) {
                            Promise.all([
                                (new Mon({
                                    taskId: taskId,
                                    timestamp: timestamp,
                                    hasException: false,
                                    data: {
                                        tree: files[0]._id,
                                        info: files[1]._id,
                                        screenShot: files[2]._id,
                                        diffPic: null
                                    },
                                    uiExceptions: {
                                        add: 0,
                                        remove: 0,
                                        text: 0,
                                        style: 0
                                    },
                                    domException: []
                                })).save(),
                                task.save()
                            ])
                                .then(function (data) {
                                    res.json({
                                        status: 0,
                                        mon: data[0]
                                    });
                                })
                                .catch(function (err) {
                                    res.json({
                                        status: -1,
                                        errInfo: err.toString()
                                    })
                                })
                        })
                }, true); //
            } else { // 有基准页面
                var files = [
                        {
                            filename: "tree.json",
                            name: "tree"
                        },
                        {
                            filename: "info.json",
                            name: "info"
                        },
                        {
                            filename: "screenShot.jpg",
                            name: "screenShot"
                        }],
                    basePage = task.base.getTime(), // 获取基准页面时间戳
                    basePageDir, // 基准页面dir
                    parseDir; // 解析过后的path
                monitor.capture(function (code) { // 截取当前时间点图片，
                    if (code != 0) {
                        res.json({
                            status: -1,
                            errInfo: monitor.log.error
                        })
                        return;
                    }
                    monitor.log.debug.forEach(function (value, index) {
                        if (/save capture /.test(value)) {
                            basedir = value.match(/\[(.*)\]/)[1];
                        }
                    });
                    if(!basedir) {
                        res.json({
                            status: -1,
                            errInfo: monitor.log.error
                        });
                        return;
                    }
                    console.log( monitor.log);
                    console.log("basedir:", basedir);
                    var parsedDir = path.parse(basedir)
                    timestamp = parseInt(parsedDir.name);
                    parsedDir.name = parsedDir.base = basePage.toString();
                    basePageDir = path.format(parsedDir);
                    console.log("basePageDir: ", basePageDir);

                    task.base = timestamp; // 重新设置基准页面
                    files = files.map(function (file) {
                        file.fileUri = path.join(basedir, file.filename);
                        return file;
                    })
                    util.exists(basePageDir)
                        .then(function (status) {
                            if (!status) { // 基准页面不存在
                                fs.mkdirSync(basePageDir);
                                return Mon.findOne({timestamp: basePage})
                                    .then(function (mon) {
                                        return Promise.all(files.map(function (file) {
                                            return util.readFromGridFS(gridfs,
                                                mon.data[file.name],
                                                path.join(basePageDir, file.filename)
                                            );
                                        }))

                                    })
                            } else {
                                return Promise.resolve(); // 基准页面存在直接返回
                            }
                        })
                        .then(function () {
                            monitor.diff(basePage, timestamp, function (code) {
                                console.log(monitor.log.info[0]); // diff result
                                console.log('[DONE] exit [' + code + ']');
                                var info = JSON.parse(monitor.log.info[0])
                                files.push({
                                    filename: basePage + " - " + timestamp + ".jpg",
                                    name: "screenShot",
                                    fileUri: info.diff.screenshot
                                })

                                Promise.all(files.map(function (file) {
                                    return util.saveToGridFS(gridfs, file.filename, file.fileUri)
                                }))
                                    .then(function (files) {
                                        res.json(files);
                                        var count = info.diff.count;
                                        var hasException = !(count.add == 0 &&
                                        count.remove == 0 &&
                                        count.style == 0 &&
                                        count.text);
                                        Promise.all([
                                            (new Mon({
                                                taskId: taskId,
                                                timestamp: timestamp,
                                                hasException: hasException,
                                                data: {
                                                    tree: files[0]._id,
                                                    info: files[1]._id,
                                                    screenShot: files[2]._id,
                                                    diffPic: files[3]._id
                                                },
                                                uiExceptions: count,
                                                domException: []
                                            })).save(),
                                            task.save()
                                        ])
                                    })
                                    .catch(function (err) {
                                        res.json({
                                            status: -1,
                                            errInfo: err.toString()
                                        })
                                    })
                            });
                        })
                        .catch(function (err) {
                            res.json({
                                status: -1,
                                errInfo: err.toString()
                            })
                        })
                }, true)
            }
        }).catch(function (err) {
            res.json({
                status: -1,
                errInfo: err.toString()
            })
        })
    })

    app.route("/init").get(function (req, res) {
        (new Task({
            appId: "5858f16e3d8edd17ca450148",
            url: "http://localhost:8080",
            domRules: [],
            diffRules: ["h1:contains('岳阳楼记')"],
            base: null
        })).save().then(function () {
            res.json({
                status: 0,
                message: "init successful!"
            })
        }).catch(function (err) {
            res.json({
                status: -1,
                message: err.toString()
            })
        });
    })

    app.route("/read").get(function (req, res) {
        var id = req.query.id;
        var is = gridfs.createReadStream({
            _id: id
        });
        res.type("jpg");
        is.pipe(res);
    })
}






























