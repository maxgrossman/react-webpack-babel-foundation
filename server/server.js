var express = require('express');
var path = require('path');
var config = require('../webpack.config.js')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var app = express();
// compiler is just the webpack object
var compiler = webpack(config)
// hand off compiler to middleware
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));
// serve static files from ./dist
app.use(express.static('./dist'));
// when we get a request to the root of our site
// send the client/index.html
app.use('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'))
});
var port = 3000;
// listen on our 3000 port
app.listen(port, function(error) {
  if (error) throw error;
  console.log('Express server listening on port', port);
})
