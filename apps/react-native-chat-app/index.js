import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';

// This should be "shared-elements/polyfills" but:
// https://github.com/facebook/metro/issues/670
import "@crutchcorn/shared-elements/dist/polyfills-cjs.js";

AppRegistry.registerComponent(appName, () => App);
