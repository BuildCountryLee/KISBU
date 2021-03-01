const { lstatSync } = require('fs-extra');

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
}
