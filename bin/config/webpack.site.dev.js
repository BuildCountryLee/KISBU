const { merge } = require('webpack-merge');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SITE_DESKTOP_SHARED_FILE, SITE_MOBILE_SHARED_FILE } = require('../common/constant');
const KisSitePlugin = require('../compiler/kis-site-plugin');
const baseConfig = require('./webpack.base');
const { getWebpackConfig } = require('../common');

function getSiteDevBaseConfig() {
  // console.log(baseConfig);
  return merge(baseConfig, {
    entry: {
      'site-mobile': [
        join(__dirname, '../site/mobile/main.js'),
      ],
      'site-web': [
        join(__dirname, '../site/web/main.js'),
      ]
    },
    devServer: {
      port: 8080,
      quiet: false,
      hot: true,
      host: '0.0.0.0',
      publicPath: '/',
    },
    resolve: {
      alias: {
        'site-desktop-shared': SITE_DESKTOP_SHARED_FILE,
        'site-mobile-shared': SITE_MOBILE_SHARED_FILE
      }
    },
    output: {
      chunkFilename: '[name].js',
    },
    plugins: [
      new KisSitePlugin(),
      new HtmlWebpackPlugin({
        chunks: ['chunks', 'site-mobile'],
        template: join(__dirname, '../site/mobile/index.html'),
        filename: 'mobile.html',
      }),
      new HtmlWebpackPlugin({
        chunks: ['chunks', 'site-web'],
        template: join(__dirname, '../site/web/index.html'),
        filename: 'index.html',
      }),
    ]
  })
}

function getSiteDevConfig() {
  return merge(getSiteDevBaseConfig(), getWebpackConfig());
}

module.exports = {
  getSiteDevConfig,
}