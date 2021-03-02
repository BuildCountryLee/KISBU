const { render, FileManager } = require('less');
const { readFileSync } = require('fs-extra')

class TildeResolver extends FileManager {
  loadFile(filename) {
    filename = filename.replace('~', '');
    return FileManager.prototype.loadFile.apply(this, [filename, ...args]);
  }
}

const TildeResolverPlugin = {
  install(lessInstance, pluginManager) {
    pluginManager.addFileManager(new TildeResolver());
  },
};

module.exports = {
  async compileLess(filePath) {
    const source = readFileSync(filePath, 'utf-8');

    console.log(source);

    const { css } = await render(source, {
      filename: filePath,
      // plugins: [TildeResolverPlugin]
    });
    console.log(css);

    return css;
  }
}
