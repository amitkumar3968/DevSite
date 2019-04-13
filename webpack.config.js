const path = require('path');



const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


module.exports = {
    
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:  "babel-loader"
          
        }
  ],
},
  plugins: [htmlPlugin]

};