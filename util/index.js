var fs = require("fs");
var config = require("../config");

exports.saveToGridFS = function (gridfs, filename, fileUri) {
    return new Promise(function (resolve, reject) {
        var is = fs.createReadStream(fileUri);
        var os = gridfs.createWriteStream({
            filename: filename,
        });
        is.pipe(os);
        os.on("close", function (file) {
            resolve(file);
        })
        os.on("error", function (err) {
            reject(err);
        })
    });
}

exports.readFromGridFS = function (gridfs, id, filepath) {
    return new Promise(function (resolve, reject) {
        var is = gridfs.createReadStream({
            _id: id
        });
        var os = fs.createWriteStream(filepath);
        is.pipe(os);
        os.on("close", function (file) {
            resolve(file);
        })
        os.on("error", function (err) {
            reject(err);
        })
    });
}

exports.exists = function (path) {
    return new Promise(function (resolve) {
        fs.access(path, function (err) {
            if (err) resolve(false);
            resolve(true);
        })
    })
}

exports.sendMessage = function (channel, queueName) {
    return function (message) {
        channel.sendToQueue(queueName, new Buffer(JSON.stringify(message), "utf-8"), { persistent: true });
    }
}
