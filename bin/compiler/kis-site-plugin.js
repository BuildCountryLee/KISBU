const { genSiteWebShared } = require('../generator/gen-site-web-shared');

const PLUGIN_NAME = 'KisSitePlugin';

function genSiteEntry() {
  return new Promise((resolve, reject) => {
    genSiteWebShared();
    resolve();
  })
}

module.exports = class KisSitePlugin {
  apply(compiler) {
    if (process.env.NODE_ENV === 'production') {
      compiler.hooks.beforeCompiler.tapPromise(PLUGIN_NAME, genSiteEntry);
    } else {
      compiler.hooks.watchRun.tapPromise(PLUGIN_NAME, genSiteEntry);
    }
  }
}
