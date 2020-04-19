var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var users   = require('./routes/users');
var auth    = require('./routes/auth');
var clients = require('./routes/clients');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users',users);
app.use('/auth',auth);
app.use('/clients',clients);


// error handler
app.use(function(err, req, res, next) {
   console.log('app.js');
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
    });
});


const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        console.log(data);
        client.send(data);
      }
    });
  });
});


module.exports = app;