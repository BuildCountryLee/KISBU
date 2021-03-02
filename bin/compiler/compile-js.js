const { transformAsync } = require('@babel/core');
const { readFileSync, removeSync, outputFileSync } = require('fs-extra');
const { replaceExt } = require('../common');
const { replaceCssImport } = require('../common/css');

module.exports = {
  compileJs(filePath) {
    console.log('compileJs', filePath);
    return new Promise((resolve, reject) => {
      let code = readFileSync(filePath, 'utf-8');

      // code = replaceCssImport(code);

      transformAsync(code, {
        filename: filePath,
      }).then(result => {
        // console.log(result);
        if (result) {
          const jsFilePath = replaceExt(filePath, '.js');
        
          removeSync(filePath);
          outputFileSync(jsFilePath, result.code);
          resolve();
        }
      }).catch(reject);
    })
  }
}