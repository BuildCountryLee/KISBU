const { join } = require('path');
const { readdirSync } = require('fs-extra');
const { SITE_DESKTOP_SHARED_FILE, SRC_DIR } = require('../common/constant');
const { smartOutput, pascalize, normalizePath } = require('../common');

function resolveDocuments(components) {
  const docs = [];

  components.forEach(component => {
    docs.push({
      name: pascalize(component),
      path: join(SRC_DIR, component, 'README.md')
    })
  });

  return docs;
}

function genImportDocuments(items) {
  return items.map(item => `import ${item.name} from '${normalizePath(item.path)}';`).join('\n');
}

function genSiteWebShared() {
  const dirs = readdirSync(SRC_DIR);
  const documents = resolveDocuments(dirs);
  console.log(documents);

  const code = `${genImportDocuments(documents)}`;

  smartOutput(SITE_DESKTOP_SHARED_FILE, code);
}

genSiteWebShared();

module.exports = {
  genSiteWebShared,
}
