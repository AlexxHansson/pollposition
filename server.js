var express = require('express');
var sql = require('sql');
var passport = require('passport');
GoogleStrategy = require('passport-google').Strategy;
var app = express();

app.all('/*', function(req, res, next) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

var passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy;

passport.use(new GoogleStrategy({
    returnURL: 'http://pollposition.johandamm.com/auth/google/return',
    realm: 'http://pollposition.johandamm.com:8080'
  },
  function(identifier, profile, done) {
    User.findOrCreate({ openId: identifier }, function(err, user) {
      done(err, user);
    });
  }
));



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
//google login deets
app.get('/auth/google', passport.authenticate('google'));
app.get('/auth/google/return', 
  passport.authenticate('google', { successRedirect: '/',
                                    failureRedirect: '/login' }));

//slut på google stuff
app.get('/api/vote', function (req, res){
    'use strict';

    res.send(200);
});

app.post('/api/createPoll', function (req, res){
    'use strict';

    res.send(200);
});

app.listen(8080);