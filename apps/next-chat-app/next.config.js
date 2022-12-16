const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["react-native-web", "@expo/next-adapter", "@crutchcorn/shared-elements"]);

module.exports = withPlugins([withTM, [withExpo, { projectRoot: __dirname }], {
  webpack(config) {
    // TODO: Come back to this and use
    // @see https://www.npmjs.com/package/next-transpile-modules#user-content-but-i-really-need-to-make-it-work-with-lerna
    config.resolve.modules = [__dirname + '/node_modules']
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    return config;
  }
}], {
  // reanimated doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  webpack5: true,
});