const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {

  /*入口*/
  entry: {
    app: [
      "@babel/polyfill",
      path.join(__dirname, '../src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  mode: 'production',

  /*输出到dist目录，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: "/",
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, '../src')
    }, {
      test: /\.css$/,
      use: [{loader: MiniCssExtractPlugin.loader}, {
        loader:'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]--[hash:base64:5]'
        }
      }, 'postcss-loader']
    },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, '../src/pages'),
      components: path.join(__dirname, '../src/components'),
      router: path.join(__dirname, '../src/router'),
      actions: path.join(__dirname, '../src/redux/actions'),
      reducers: path.join(__dirname, '../src/redux/reducers'),
      images: path.join(__dirname, '../src/images'),
    }
  },
  devtool: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html')
    }),
    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ // 压缩css
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ]
};
