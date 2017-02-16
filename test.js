// var mongoose = require('mongoose');
// // mongoose.connect('mongodb://192.168.88.33/fpms');
// mongoose.Promise = global.Promise;
//
//
// var db = mongoose.createConnection("mongodb://192.168.88.33/fpms");
// db.on('open', function () {
//     require("./models/task");
//     var Task = db.model('Task');
//     Task.find({}).then(function(tasks) {
//         console.log(tasks);
//     }).catch(function (err) {
//         throw err;
//     })
// });
// db.on("error", function (err) {
//     console.error(err);
// });


var Monitor = require("./page-monitor");
var config = require("./config");
var monitor = new Monitor("http://ums.csdc.info/ums/toIndex", config.phantomConfig);
monitor.diff(1486973433687, 1486973535836);