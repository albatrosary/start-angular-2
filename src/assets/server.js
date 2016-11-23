'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var port =  process.env.PORT || 3000;

var fs=require("fs");

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTION');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Start server
server.listen(port, process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined, function() {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

var items = require('./issues.json');

app.get('/api/issues', function(req, res) {
  res.status(200).json(items);
});

app.get('/api/issues/:id', function(req, res) {
  let id = req.params.id;
  res.status(200).json(items[id]);
});

app.post('/api/issues', function(req, res) {
  items.push(req.body);
  res.status(200).json();
});

app.put('/api/issues', function(req, res) {
  let id = req.body.id;
  let issue = req.body.issue;
  items[id] = JSON.parse(issue);
  console.log(items);
  res.status(200).json();
});

app.delete('/api/issues/:id', function(req, res) {
  let id = req.params.id;
  items.splice(id, 1);
  res.status(200).json();
});

exports = module.exports = app;