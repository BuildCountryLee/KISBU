const { compileSite } = require('../compiler/compile-site');

module.exports = async function () {
  await compileSite();
}
