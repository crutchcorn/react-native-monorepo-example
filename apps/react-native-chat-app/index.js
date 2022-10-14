import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';
import "./src/utils/polyfills";

AppRegistry.registerComponent(appName, () => App);
