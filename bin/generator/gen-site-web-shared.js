const { join } = require('path');
const { readdirSync, existsSync } = require('fs-extra');
const {
  KISBU_CONFIG_FILE,
  SITE_DESKTOP_SHARED_FILE,
  SRC_DIR,
  ROOT,
} = require('../common/constant');
const { smartOutput, pascalize, normalizePath } = require('../common');

function resolveDocuments(components) {
  const docs = [];

  components.forEach(component => {
    docs.push({
      name: pascalize(component),
      path: join(SRC_DIR, component, 'README.md')
    })
  });

  return [...docs.filter(doc => existsSync(doc.path))];
}

function genImportConfig() {
  return `import config from '${normalizePath(KISBU_CONFIG_FILE)}';`;
}

function genExportConfig() {
  return `export {config};`;
}

function genImportDocuments(items) {
  return items.map(item => `import ${item.name} from '${normalizePath(item.path)}';`).join('\n');
}

function genExportDocuments(items) {
  return `export const documents = {
  ${items.map(item => item.name).join(',\n  ')}
};`;
}

function genSiteWebShared() {
  const dirs = readdirSync(SRC_DIR);
  const documents = resolveDocuments(dirs);

  const code = `${genImportConfig()}
${genImportDocuments(documents)}
${genExportConfig()}
${genExportDocuments(documents)}
`;

  smartOutput(SITE_DESKTOP_SHARED_FILE, code);
}

// genSiteWebShared();

module.exports = {
  genSiteWebShared,
}
