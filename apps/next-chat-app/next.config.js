const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["react-native-web", "@crutchcorn/shared-elements"]);
const { DefinePlugin } = require('webpack');

module.exports = withPlugins([withTM, {
  webpack(config, options) {
    // Mix in aliases
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'styled-components': require.resolve('styled-components'),
      // Alias direct react-native imports to react-native-web
      'react-native$': require.resolve('react-native-web'),
      // Alias internal react-native modules to react-native-web
      'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
        require.resolve('react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter'),
      'react-native/Libraries/vendor/emitter/EventEmitter$':
        require.resolve('react-native-web/dist/vendor/react-native/emitter/EventEmitter'),
      'react-native/Libraries/EventEmitter/NativeEventEmitter$':
        require.resolve('react-native-web/dist/vendor/react-native/NativeEventEmitter'),
    };

    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...(config.resolve?.extensions ?? []),
    ];

    if (!config.plugins) {
      config.plugins = [];
    }

    // Expose __DEV__ from Metro.
    config.plugins.push(
      new DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      })
    );

    return config;
  },
}], {
  // reanimated doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  webpack5: true
});