var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var pg = require('pg');
var sql = require('sql');

app.get('/', function (req, res) {
    'use strict';
    //res.sendfile(__dirname+'/../app/index.html');
});

io.on('connection', function (socket) {
    'use strict';
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });

    socket.on('getClosest', function(data){
        console.log(data);
    });

    socket.on('createPoll', function(data){
        console.log(data);
    });

    socket.on('vote', function(data){
        console.log(data);
    });
});

server.listen(8080);