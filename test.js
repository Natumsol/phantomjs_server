var mongoose = require('mongoose');
// mongoose.connect('mongodb://192.168.88.33/fpms');
mongoose.Promise = global.Promise;


var db = mongoose.createConnection("mongodb://192.168.88.33/fpms");
db.on('open', function () {
    require("./models/task");
    var Task = db.model('Task');
    Task.find({}).then(function(tasks) {
        console.log(tasks);
    }).catch(function (err) {
        throw err;
    })
});
db.on("error", function (err) {
    console.error(err);
});