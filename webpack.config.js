const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 模式
  mode: 'production',
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // loader
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  // 给 webpack-dev-server 用得
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000
  },
  // ! vue：用到 template 采用
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
