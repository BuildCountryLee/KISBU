const { POSTCSS_CONFIG_FILE } = require('../common/constant');
const { VueLoaderPlugin } = require('vue-loader');

const SCRIPT_EXTS = [
  '.js', '.vue',
];

const STYLE_EXTS = [
  '.css', '.less', '.scss'
];

const CSS_LOADERS = [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: POSTCSS_CONFIG_FILE,
      },
    },
  },
];

module.exports = {
  mode: 'development',
  resolve: {
    extensions: [...SCRIPT_EXTS, ...STYLE_EXTS],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: CSS_LOADERS,
      },
      {
        test: /\.less$/,
        use: [...CSS_LOADERS, 'less-loader'],
      },
      {
        test: /\.md$/,
        use: ['vue-loader', '@vant/markdown-loader'],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
