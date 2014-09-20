var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var sql = require('sql');

app.all('/*', function(req, res, next) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/', express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    'use strict';
    res.sendFile(__dirname+'/app/index.html');
});

io.on('connection', function (socket) {
    'use strict';
    console.log('user connected');

    socket.emit('connected');

    socket.on('getClosest', function (data){
        console.log(data);
    });

    socket.on('createPoll', function (data){
        console.log(data);
    });

    socket.on('vote', function (data){
        socket.emit('voted');
        console.log(data);
    });
});

server.listen(8080);