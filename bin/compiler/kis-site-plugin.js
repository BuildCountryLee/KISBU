
const PLUGIN_Name = 'KisSitePlugin';

class KisSitePlugin {
  apply(compiler) {
    if (process.env.NODE_ENV === 'production') {
      compiler.hooks.beforeCompiler.tapPromise(PLUGIN_Name);
    } else {
      compiler.hooks.watchRun.tapPromise(PLUGIN_Name);
    }
  }
}
