const { compileSite } = require('../compiler/compile-site');

module.exports = {
  buildSite() {
    
    compileSite(true);
  }
}
