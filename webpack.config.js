const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devtool:"eval-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
   rules: [
     {
       test: /\.m?js$/,
       exclude: /(node_modules|bower_components)/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-env']
         }
       }
     }
   ]
 }
};