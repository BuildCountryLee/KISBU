const { existsSync } = require('fs');
const { join, dirname } = require('path');

function findRootDir(dir) {
  console.log(dir);
  if (dir === '/') {
    return '/';
  }

  if (existsSync(join(dir, 'kisbu.config.js'))) {
    return dir;
  }

  return findRootDir(dirname(dir));
}

const CWD = process.cwd();
const ROOT = findRootDir(CWD);
const ES_DIR = join(ROOT, 'dist/es');
const SITE_DIST_DIR = join(ROOT, 'dist/site');
const PACKAGE_JSON_FILE = join(ROOT, 'package.json');
const ROOT_WEBPACK_CONFIG_FILE = join(ROOT, 'webpack.config.js');
const KISBU_CONFIG_FILE = join(ROOT, 'kisbu.config.js');

const CONFIG_DIR = join(__dirname, '../config');

const SRC_DIR = join(__dirname, '../../src');

const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js');
const ROOT_POSTCSS_CONFIG_FILE = join(ROOT, 'postcss.config.js');

function getPackageJson() {
  return require(PACKAGE_JSON_FILE);
}

function getKisbuConfig() {
  return require(KISBU_CONFIG_FILE);
}

module.exports = {
  ROOT,
  SRC_DIR,
  ES_DIR,
  SITE_DIST_DIR,
  ROOT_WEBPACK_CONFIG_FILE,
  POSTCSS_CONFIG_FILE,
  ROOT_POSTCSS_CONFIG_FILE,
  getPackageJson,
  getKisbuConfig,
}
