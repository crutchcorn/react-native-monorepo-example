const installedVersion = require('@babel/runtime/package.json').version;

module.exports = function babelJestConfig (api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-env', 'babel-preset-expo', '@expo/next-adapter/babel'],
    plugins: [
      ['@babel/plugin-transform-runtime', {
        "version": installedVersion
      }],
      '@babel/plugin-proposal-class-properties'
    ]
  }
}