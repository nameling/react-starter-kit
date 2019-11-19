/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
// plugin的 { key: value } 对应 { pluginName: pluginOptions }，postcss会自动查找插件

module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    },
    // cssnano 配合 css-modules 有 bug
    // cssnano: {},
  },
};
