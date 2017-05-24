var webpack = require('webpack')
var path = require('path')
module.exports = {
  // show error that corresponds to original file
  devtool: 'inline-source-map',
  // file we define encompassing component in
  entry: [
    'webpack-hot-middleware/client',
    './client/client.js'
  ],
  // where webpack spits out our bundle.js
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    // optimizes order
    new webpack.optimize.OccurrenceOrderPlugin(),
    // allows components to be replaced hot modularly
    new webpack.HotModuleReplacementPlugin(),
    // won't allow webpack to bundle if there is an error
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  // define tasks for webpack to do while it bundles up into bundle.js
  module: {
    // what to do with each type of file
    loaders: [
      {
        // for .js files
        test: /\.js$/,
        // compiles es6 into broswer friendly javascript
        loader: 'babel-loader',
        // don't do it for node_modules
        exclude: /node_modules/,
        // instructions for babel when it compiles
        query: {
          presets: ['react','es2015','react-hmre']
        }
      }
    ]
  }
}
