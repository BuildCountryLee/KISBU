const { getPostcssConfig } = require('../common');

function mergePostCssConfig(config1, config2) {
  const plugins = {
    ...config1.plugins,
    ...config2.plugins,
  };

  return {
    ...config1,
    ...config2,
    plugins,
  }
}

const DEFAULT_CONFIG = {
  plugins: {
    autoprefixer: {},
  },
};

module.exports = mergePostCssConfig(DEFAULT_CONFIG, getPostcssConfig());
