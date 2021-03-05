const { merge } = require('webpack-merge');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ROOT } = require('../common/constant');
const baseConfig = require('./webpack.base');
const { getWebpackConfig } = require('../common');

function getSiteDevBaseConfig() {
  // console.log(baseConfig);
  return merge(baseConfig, {
    entry: {
      'site-mobile': [
        join(ROOT, 'site/mobile/main.js'),
      ],
      'site-web': [
        join(ROOT, 'site/web/main.js'),
      ]
    },
    devServer: {
      port: 8080,
      quiet: true,
      host: '0.0.0.0',
      publicPath: '/',
    },
    resolve: {
      alias: {}
    },
    output: {
      chunkFilename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        chunks: ['chunks', 'site-mobile'],
        template: join(ROOT, 'site/mobile/index.html'),
        filename: 'mobile.html',
      }),
      new HtmlWebpackPlugin({
        chunks: ['chunks', 'site-web'],
        template: join(ROOT, 'site/web/index.html'),
        filename: 'index.html',
      })
    ]
  })
}

function getSiteDevConfig() {
  return merge(getSiteDevBaseConfig(), getWebpackConfig());
}

module.exports = {
  getSiteDevConfig,
}