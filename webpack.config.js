var path = require('path');
var srcPath = path.resolve(__dirname, "src");
var distPath = path.resolve(__dirname, "dist");

module.exports = {
  devtool: 'source-map',
  mode: "production",
  entry: [
    srcPath + "/index.ts"
  ],
  output: {
    path: distPath,
    publicPath: '/',
    filename: "main.js"
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      include: /dist/,
      loader: "babel-loader",
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  devServer: {
    hot: true,
    port: 4500
  }
};