const compiler = require('vue-template-compiler');
const compilerUtils = require('@vue/component-compiler-utils');
const hash = require('hash-sum');
const { remove, readFileSync, writeFileSync } = require('fs-extra');
const { parse } = require('path');
const { replaceExt } = require('../common');

const RENDER_FN = '__vue_render__';
const STATIC_RENDER_FN = '__vue_staticRenderFns__';
const EXPORT = 'export default {';

function trim(code) {
  return code.replace(/\/\/\n/g, '').trim();
}

function getSfcStylePath(filePath, ext, index) {
  const number = index !== 0 ? `-${index + 1}` : '';
  return replaceExt(filePath, `-sfc${number}.${ext}`);
}

// inject render fn to script
function injectRender(script, render) { 
  script = trim(script);
  render = render
    .replace('var render', `var ${RENDER_FN}`)
    .replace('var staticRenderFns', `var ${STATIC_RENDER_FN}`);
  
  return script.replace(
    EXPORT,
    `${render}\n${EXPORT}\n  render: ${RENDER_FN},\n\n  staticRenderFns: ${STATIC_RENDER_FN},\n`
  );
}

function injectScopedId(script, scopedId) {
  return script.replace(EXPORT, `${EXPORT}\n  _scopeId: '${scopedId}',`);
}

function injectStyle(script, styles, filePath) {
  if (styles.length) {
    const imports = styles.map((style, index) => {
      const { base } = parse(getSfcStylePath(filePath, 'css', index));
      return `import './${base}';`;
    }).join('\n');

    return script.replace(EXPORT, `${imports}\n\n${EXPORT}`);
  }
  return script;
}

function compileTemplate(template) {
  const result = compilerUtils.compileTemplate({
    compiler,
    source: template,
    isProduction: true,
  });

  console.log(result);
  return result.code;
}

function parseSfc(filePath) {
  const source = readFileSync(filePath, 'utf-8');

  const descriptor = compilerUtils.parse({
    source,
    compiler,
    needMap: false,
  });

  console.log(descriptor);
  return descriptor;
}

module.exports = {
  compileSfc(filePath) {
    consola.info('compile sfc');
    const tasks = [remove(filePath)];
    const source = readFileSync(filePath, 'utf-8');
    const jsFilePath = replaceExt(filePath, '.js');
    const descriptor = parseSfc(filePath);
    const { template, styles } = descriptor;

    const hasScoped = styles.some(s => s.scoped);
    const scopeId = hasScoped ? `data-v-${hash(source)}` : '';

    // compile js
    if (descriptor.script) {
      tasks.push(
        new Promise((resolve, reject) => {
          let script = descriptor.script.content;
          script = injectStyle(script, styles, filePath);

          if (template) {
            const render = compileTemplate(template.content);
            script = injectRender(script, render);
          }

          if (scopeId) {
            script = injectScopedId(script, scopeId);
          }

          writeFileSync(jsFilePath, script);
          // compileJs(jsFilePath).then(resolve).catch(reject);
        })
      )
    }

    // compile style


    return Promise.all(tasks);
  }
}

