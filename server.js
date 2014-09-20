var express = require('express');
var db = require('./db');
var passport = require('passport');
, GoogleStrategy = require('passport-google').Strategy;
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
    returnURL: 'http://www.example.com/auth/google/return',
    realm: 'http://pollposition.johandamm.com:8080'
  },
  function(identifier, profile, done) {
    User.findOrCreate({ openId: identifier }, function(err, user) {
      done(err, user);
    });
  }
));

app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

app.use('/', express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    'use strict';
    res.sendFile(__dirname+'/app/index.html');
});

app.get('/api/at', function (req, res){
    'use strict';
    var data = JSON.parse(req.query.q);
    console.log(data);
    db.query('SELECT * FROM polls', function (data){
        res.status(200).send(data);
    });

});
//google login deets
app.get('/auth/google', passport.authenticate('google'));
app.get('/auth/google/return', 
  passport.authenticate('google', { successRedirect: '/',
                                    failureRedirect: '/login' }));

//slut på google stuff
app.get('/api/vote', function (req, res){
    'use strict';

    res.status(200);
});

app.post('/api/createPoll', function (req, res){
    'use strict';

    res.status(200);
});

app.listen(8080);