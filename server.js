var express      = require('express');
var config       = require('config');
var favicon      = require('serve-favicon');
var path         = require('path');
var flash        = require('connect-flash');
var swig         = require('swig');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
	res.render('index.ejs');
});


app.use(function(req, res) {
      res.status(400);
     res.render('error.ejs', {title: '404: File Not Found'});
  });


app.listen(port);
console.log('Go to Port ' + port);

module.exports = app;