var Monitor = require("../page-monitor");
var fs = require('fs');
var path = require("path");
var saveToGridFS = require("../util").saveToGridFS;
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

    app.route("/diff").post(function (req, res, next) {
        var url = req.body.url,
            taskid = req.body.taskid,
            exceptions = (req.body.exceptions && req.body.exceptions.split("; ").slice(0, -1)) || [];

        config.walk.excludeSelectors = exceptions;
        console.log(config);
        var monitor = new Monitor(url, config);
        monitor.on('debug', function (data) {
            console.log('[DEBUG] ' + data);
        });
        monitor.on('error', function (data) {
            console.error('[ERROR] ' + data);
        });
        monitor.capture(function (code) {
            if (monitor.log.info[0]) {
                // console.log(monitor.log)
                var info = JSON.parse(monitor.log.info[0]);
                console.log(info);
                var dir = info.dir,
                    diff = info.diff;
                var is = fs.createReadStream(dir + "/screenshot.jpg");
                var os = gridfs.createWriteStream({
                    filename: "screenshot.jpg",
                });
                is.pipe(os);

                os.on("close", function (file) {
                    res.json(file);
                })
            } else {
                var dir, isChange = true;
                monitor.log.debug.forEach(function (value, index) {
                    if (/save capture /.test(value)) {
                        dir = value.match(/\[(.*)\]/)[1];
                        console.log(dir);
                    } else if (/no change/.test(value)) {
                        isChange = false;
                    }
                })
                console.log(dir);
                if (isChange) {
                    var is = fs.createReadStream(dir + "/screenshot.jpg");
                    var os = gridfs.createWriteStream({
                        filename: "screenshot.jpg",
                    });
                    is.pipe(os);

                    os.on("close", function (file) {
                        res.json(file);
                    })
                } else {
                    res.json({
                        info: "no change"
                    })
                }

            }
            console.log('[DONE] exit [' + code + ']');
        }, false);
    });

    app.route("/test").post(function (req, res) {
        var taskId = req.body.taskId;
        Task.findById(taskId).then(function (task) {
            config.walk.excludeSelectors = task.diffRules;

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
                diffPic; // diff picture ObjectId

            if (!task.base) { // 没有基准页面
                monitor.capture(function (code) {
                    monitor.log.debug.forEach(function (value, index) {
                        if (/save capture /.test(value)) {
                            basedir = value.match(/\[(.*)\]/)[1];
                            console.log("basedir = ", dir);
                        }
                    });

                }, true); //
            } else {

            }


        }).catch(function (err) {
            res.json(err);
        })
    })
}