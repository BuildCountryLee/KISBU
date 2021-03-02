const { parse } = require('path');
const { readFileSync, writeFileSync } = require('fs-extra');
const { replaceExt } = require('../common');
const { compileCss } = require('./compile-css');
const { compileLess } = require('./compile-less');
const consola = require('consola');


async function compileFile(filePath) {
  const { ext } = parse(filePath);

  try {
    if (ext === '.less') {
      const source = await compileLess(filePath);
      return await compileCss(source);
    }

    const source = readFileSync(filePath, 'utf-8');
    return await compileCss(source);

  } catch (err) {
    consola.error('Compile style failed: ' + filePath);
    throw err;
  }
}

async function compileStyle(filePath) {
  const css = await compileFile(filePath);

  writeFileSync(replaceExt(filePath, '.css'), css);
}

module.exports = {
  compileFile,
  compileStyle
}
