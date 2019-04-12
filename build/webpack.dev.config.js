const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {

  /*入口*/
  entry: {
    app: [
      "@babel/polyfill",
      path.join(__dirname, '../src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  mode: 'development',

  /*输出到dist目录，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, '../src')
    }, {
      test: /\.css$/,
      use: [{loader: MiniCssExtractPlugin.loader}, {
        loader: 'css-loader',
        options: {
          modules: false,
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
      store: path.join(__dirname, '../src/store'),
      images: path.join(__dirname, '../src/images'),
    },
    extensions: ['.js', '.json', '.jsx']
  },
  // webpack-dev-server
  devServer: {
    // contentBase: path.join(__dirname, '../dist'),
    compress: true,  // gzip压缩
    hot: true, // 热更新
    historyApiFallback: true, // 解决启动后刷新404
    proxy: { // 配置服务代理
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: {'^/api': ''},  //可转换
        changeOrigin: true
      }
    },
    port: 3000 // 端口
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html'),
      favicon: path.join(__dirname, '../public/React.png')
    }),
    new MiniCssExtractPlugin({ // 压缩css
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ]
};
