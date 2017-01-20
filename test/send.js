var q = 'phantomjs_task_queue';
var msg = {
    taskId: "5864d3fed97ec22998f01c56"
}

// var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://localhost', function (err, conn) {
//     conn.createChannel(function (err, ch) {
//         ch.assertQueue("test1", { durable: true });
//         ch.sendToQueue("test1", new Buffer(JSON.stringify(msg), "utf-8"), { persistent: true });
//         console.log(" [x] Sent '%s'", msg);
//         ch.assertQueue("test2", { durable: true });
//         ch.sendToQueue("test2", new Buffer(JSON.stringify(msg), "utf-8"), { persistent: true });
//         console.log(" [x] Sent '%s'", msg);
//     });
// });

var count = 0;
var open = require('amqplib').connect("amqp://localhost");
open
    .then(function (conn) {
        var ok = conn.createChannel()
            .then(function (ch) {
                return ch.assertQueue(q).then(function (ok) {
                    global.ch = ch;
                    count ++;
                    return ch.sendToQueue(q, new Buffer(JSON.stringify(msg), "utf-8"));
                });
            })
            .then(function (msg) {
                console.log(msg);
                console.log("message has send!");
                return Promise.resolve();
            })
        // return ok.then(conn.close.bind(conn));
        return ok;
    })
    .then(function (data) {
        console.log(data);
        // process.exit(0);
        setInterval(function () {
            count ++;
            global.ch.sendToQueue(q, new Buffer(JSON.stringify(msg), "utf-8"));
            console.log(count + " messages has been sent!");
        }, 500)
    })
    .catch(console.warn);