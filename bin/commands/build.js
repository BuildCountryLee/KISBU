const { clean } = require('./clean');
const consola = require('consola');
const { copy, readdirSync } = require('fs-extra');
const { join } = require('path');
const { SRC_DIR, ES_DIR } = require('../common/constant');
const { isDir, isSfc } = require('../common');
const { compileSfc } = require('../compiler/compile-sfc');

module.exports = async function build() {

  consola.info('start build');

  try {
    await clean();
    await buildEs();
  } catch (err) {
    consola.error(err);
    consola.error('build fail');
  }
}

async function buildEs() {
  consola.info('build es');
  await copy(SRC_DIR, ES_DIR);
  await compileDir(ES_DIR);
}

async function compileDir(dir) {
  const files = readdirSync(dir);

  await Promise.all(files.map(filename => {
    const filePath = join(dir, filename);

    if (isDir(filePath)) {
      return compileDir(filePath);
    }

    return compileFile(filePath);
  }));
}

async function compileFile(filePath) {
  if (isSfc(filePath)) {
    return compileSfc(filePath);
  }
}
