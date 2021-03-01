const { remove } = require('fs-extra');
const { resolve } = require('path');

const ES_DIR = resolve(__dirname, '../../es');

module.exports = {
  async clean() {
    await Promise.all([
      remove(ES_DIR)
    ]);
  }
}
