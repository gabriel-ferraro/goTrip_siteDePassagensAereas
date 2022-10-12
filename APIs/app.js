require('./database/mongodb');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/indexRouter');
var clienteRouter = require('./routes/clienteRouter');
var loginRouter = require('./routes/loginRouter');
var locaisHomeRouter = require('./routes/locaisHomeRouter');
var passagemRouter = require('./routes/passagemRouter');
var perfilRouter = require('./routes/perfilRouter');
var usuarioRouter = require('./routes/usuarioRouter');
var viagemRouter = require('./routes/viagemRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/auth', loginRouter)
app.use('/cliente', clienteRouter);
app.use('/locaisHome', locaisHomeRouter);
app.use('/passagem', passagemRouter);
app.use('/perfil', perfilRouter);
app.use('/usuario', usuarioRouter);
app.use('/viagem', viagemRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
