const { lstatSync, existsSync } = require('fs-extra');
const { ROOT_POSTCSS_CONFIG_FILE } = require('../common/constant');

const EXT_REGEXP = /\.\w+$/;
const SFC_REGEXP = /\.(vue)$/;

module.exports = {
  replaceExt(path, ext) {
    return path.replace(EXT_REGEXP, ext);
  },
  isDir(dir) {
    return lstatSync(dir).isDirectory();
  },
  isSfc(path) {
    return SFC_REGEXP.test(path);
  },
  getWebpackConfig() { },
  getPostcssConfig() {
    if (existsSync(ROOT_POSTCSS_CONFIG_FILE)) {
      return require(ROOT_POSTCSS_CONFIG_FILE);
    }

    return {};
  }
}
