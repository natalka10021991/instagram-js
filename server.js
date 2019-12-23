const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const bootstrap = require('./src/server/bootstrap');

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 200
  }
}));

app.use(require("webpack-hot-middleware")(compiler));

bootstrap(app);

// Serve the files on port 4001.
app.listen(4001, function () {
  console.log('Example app listening on port 4001!\n');
});