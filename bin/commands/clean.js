const { remove } = require('fs-extra');
const { resolve } = require('path');
const { ES_DIR } = require('../common/constant');

module.exports = {
  async clean() {
    await Promise.all([
      remove(ES_DIR)
    ]);
  }
}
