var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
require("./models/mon");
require("./models/task");
mongoose.Promise = global.Promise;
var conn = mongoose.createConnection("mongodb://192.168.88.33/fpms");
conn.on('open', function () {
    var gfs = Grid(conn.db);
    app.set('gridfs', gfs);
    require('./routes/index')(app);
    require("./routes/diff")(app);
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    // all set!
});
conn.on("error", function (err) {
    console.error(err);
});

app.set('db', conn);

module.exports = app;
