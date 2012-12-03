var io = require('socket.io');
var express = require('express');

var app = express.createServer()
var io = io.listen(app);

app.listen(process.env.PORT);

io.sockets.on('connection', function (socket) {
    console.log("new connection!");
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

console.log( process.env.PORT + " " + process.env.IP );