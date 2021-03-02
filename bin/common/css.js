const CSS_LANG = 'less';
const IMPORT_STYLE_REGEXP = /import\s+?(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

module.exports = {
  // "import 'a.less';" => "import 'a.css';"
  replaceCssImport(code) {
    return code.replace(IMPORT_STYLE_REGEXP, str => {
      str.replace(`.${CSS_LANG}`, '.css');
    });
  }
}