const { existsSync } = require('fs');
const { join, dirname } = require('path');

function findRootDir(dir) {
  // console.log(dir);
  if (dir === '/') {
    return '/';
  }

  if (existsSync(join(dir, 'kisbu.config.js'))) {
    // console.log(dir);
    return dir;
  }

  return findRootDir(dirname(dir));
}

// Root path
const CWD = process.cwd();
const ROOT = findRootDir(CWD);
const ES_DIR = join(ROOT, 'es');
const SITE_DIST_DIR = join(ROOT, 'site');
const PACKAGE_JSON_FILE = join(ROOT, 'package.json');
const ROOT_WEBPACK_CONFIG_FILE = join(ROOT, 'webpack.config.js');
const KISBU_CONFIG_FILE = join(ROOT, 'kisbu.config.js');

// Relative path
const DIST_DIR = join(__dirname, '../../dist');
const CONFIG_DIR = join(__dirname, '../config');
const SRC_DIR = join(__dirname, '../../src');

const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js');
const ROOT_POSTCSS_CONFIG_FILE = join(ROOT, 'postcss.config.js');

// Dist files
const SITE_DESKTOP_SHARED_FILE = join(DIST_DIR, 'site-desktop-shared.js');
const SITE_MOBILE_SHARED_FILE = join(DIST_DIR, 'site-mobile-shared.js');

function getPackageJson() {
  return require(PACKAGE_JSON_FILE);
}

function getKisbuConfig() {
  return require(KISBU_CONFIG_FILE);
}

module.exports = {
  ES_DIR,
  KISBU_CONFIG_FILE,
  ROOT,
  ROOT_POSTCSS_CONFIG_FILE,
  ROOT_WEBPACK_CONFIG_FILE,
  SITE_DIST_DIR,
  SITE_DESKTOP_SHARED_FILE,
  SITE_MOBILE_SHARED_FILE,
  SRC_DIR,
  POSTCSS_CONFIG_FILE,
  getPackageJson,
  getKisbuConfig,
}
