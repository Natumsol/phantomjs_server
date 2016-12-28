var fs = require(fs);

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