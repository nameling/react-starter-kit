require('@babel/register')({
  extensions: ['.ts', '.js'],
});

if (process.env.NODE_ENV === 'production') {
  const webpackConfigProd = require('./tools/webpack.config.production.babel.ts')
  .default;
  module.exports = webpackConfigProd;
} else {
  const webpackConfigDev = require('./tools/webpack.config.development.babel.ts')
  .default;
  module.exports = webpackConfigDev;
}
