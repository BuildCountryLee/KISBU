const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const portfinder = require('portfinder');

const { getSiteDevConfig } = require('../config/webpack.site.dev');
const { getSiteProdConfig } = require('../config/webpack.site.prod');

function runDevServer(port, config) {
  console.log(config.module.rules);
  if (config.devServer.port !== port) {
    config.devServer.port = port;
  }
  const server = new webpackDevServer(webpack(config), config.devServer);

  server.listen(port);
}

function watch() {
  const config = getSiteDevConfig();
  portfinder.getPort({
    port: config.devServer.port,
  }, (err, port) => {
    if (err) {
      console.log(err);
      return;
    }
    runDevServer(port, config);
  });
}

function build() {
  const config = getSiteProdConfig();
  webpack(config);
}

async function compileSite(prod = false) {

  if (prod) {
    build();
  } else {
    watch();
  }
}

module.exports = {
  compileSite,
}
