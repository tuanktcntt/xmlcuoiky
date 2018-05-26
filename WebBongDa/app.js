var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var handlebars_sections=require('express-handlebars-sections');
var bm6 = require('./routes/BM6');
var bm5 = require('./routes/BM5');
var bm4 = require('./routes/BM4');
var bm3 = require('./routes/BM3');
var bm2 = require('./routes/BM2');
var bm1=require('./routes/BM1');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    extname:'hbs',
    defaultLayout:'layout', 
    layoutsDir:'views/_layouts/',
    partialsDir:'views/_partials/',
    helpers:{
        section: handlebars_sections(), 
        
    }
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bm6', bm6);
app.use('/bm5', bm5);
app.use('/bm4', bm4);
app.use('/bm3', bm3);
app.use('/bm2', bm2);
app.use('/bm1', bm1);
app.use('/', bm1)
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
module.exports = app;
