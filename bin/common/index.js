const { lstatSync, existsSync, readFileSync, outputFileSync } = require('fs-extra');
const {
  ROOT_WEBPACK_CONFIG_FILE,
  ROOT_POSTCSS_CONFIG_FILE,
} = require('../common/constant');

const CAM_REGEXP = /-(w)/g;
const PAS_REGEXP = /(\w)(\w*)/g;

function camelize(str) {
  return str.replace(CAM_REGEXP, (_, c) => c.toUpperCase());
}

function pascalize(str) {
  return camelize(str).replace(PAS_REGEXP, (_, c1, c2) => c1.toUpperCase() + c2);
}

function decamelize(str, sep = '-') {
  return str.replace(/([A-Z])([a-z\d])/g, '$1' + sep + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase();
}

function normalizePath(path) {
  return path.replace(/\\/g, '/');
}

const EXT_REGEXP = /\.\w+$/;
const SFC_REGEXP = /\.(vue)$/;

function smartOutput(filePath, content) {

  if (existsSync(filePath)) {
    const preContent = readFileSync(filePath, 'utf-8');
    if (preContent === content) {
      return;
    }
  }

  outputFileSync(filePath, content);
}

module.exports = {
  camelize,
  decamelize,
  getWebpackConfig() {
    if (existsSync(ROOT_WEBPACK_CONFIG_FILE)) {
      return require(ROOT_WEBPACK_CONFIG_FILE);
    }

    return {};
  },
  getPostcssConfig() {
    if (existsSync(ROOT_POSTCSS_CONFIG_FILE)) {
      return require(ROOT_POSTCSS_CONFIG_FILE);
    }

    return {};
  },
  normalizePath,
  isDir(dir) {
    return lstatSync(dir).isDirectory();
  },
  isSfc(path) {
    return SFC_REGEXP.test(path);
  },
  replaceExt(path, ext) {
    return path.replace(EXT_REGEXP, ext);
  },
  pascalize,
  smartOutput,
}
