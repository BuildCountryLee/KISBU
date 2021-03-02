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
const ES_DIR = join(ROOT, 'es');
const CONFIG_DIR = join(__dirname, '../config');

const SRC_DIR = join(__dirname, '../../src');

const POSTCSS_CONFIG_FILE = join(CONFIG_DIR, 'postcss.config.js');
const ROOT_POSTCSS_CONFIG_FILE = join(ROOT, 'postcss.config.js');
module.exports = {
  SRC_DIR,
  ES_DIR,
  POSTCSS_CONFIG_FILE,
  ROOT_POSTCSS_CONFIG_FILE,
}
