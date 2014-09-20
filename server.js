var express = require('express');
var db = require('./db');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var app = express();

app.all('/*', function(req, res, next) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

passport.use(new GoogleStrategy({
    clientID: "449173717835-qt7169os9ghveu6acn8m5uitfkclb2ag.apps.googleusercontent.com",
    clientSecret: "kIY2Jl-lBzcPz0eqBq2pbstG",
    callbackURL: "http://127.0.0.1:8080/oauth2callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
app.use('/', express.static(__dirname + '/app'));
 app.use(passport.initialize());
app.use(passport.session());
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
//--------------------------------------------
app.get('/auth/google',
    passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'}));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/app/index.html' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/app/index.html');
  });
//--------------------------------------------
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