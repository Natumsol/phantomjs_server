var fs = require("fs");

exports.saveToGridFS = function (gridfs, filename, fileUri) {
    return new Promise(function(resolve, reject) {
        var is = fs.createReadStream(fileUri);
        var os = gridfs.createWriteStream({
            filename: filename,
        });
        is.pipe(os);
        os.on("close", function (file) {
            resolve(file);
        })
        os.on("error", function(err){
            reject(err);
        })
    });
}

exports.readFromGridFS = function(gridfs, id, filepath) {
    return new Promise(function(resolve, reject) {
        var is = gridfs.createReadStream({
            _id: id
        });
        var os = fs.createWriteStream(filepath);
        is.pipe(os);
        os.on("close", function (file) {
            resolve(file);
            console.log(file);
        })
        os.on("error", function(err){
            reject(err);
        })
    });
}

exports.exists = function(path) {
    return new Promise(function(resolve) {
        fs.access(path, function(err) {
            if(err) resolve(false);
            resolve(true);
        })
    })
}