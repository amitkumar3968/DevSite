const path = require('path');



const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  favicon: "./src/favicon.ico"
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
          
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
            }
          ]
        }
  ],
},
  plugins: [
    htmlPlugin,
    new WorkboxPlugin.GenerateSW({

      // these options encourage the ServiceWorkers to get in there fast

      // and not allow any straggling "old" SWs to hang around

      clientsClaim: true,

      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 8194304,

    }),
    // new CopyWebpackPlugin([
    //   { from: '512x512.png', to: '512x512.png' },
    //   { from: 'manifest.json', to: 'manifest.json' }
    // ]),
  ]

};