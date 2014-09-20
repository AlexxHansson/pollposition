var express = require('express');
var sql = require('sql');

var app = express();

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

app.get('/api/getClosestPolls', function (req, res){
    'use strict';
    
    var data = {
        'foo': 'bar'
    };
    res.send(200, data);

});

app.get('/api/vote', function (req, res){
    'use strict';

    res.send(200);
});

app.post('/api/createPoll', function (req, res){
    'use strict';

    res.send(200);
});

app.listen(8080);