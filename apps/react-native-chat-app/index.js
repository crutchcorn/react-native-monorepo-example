import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import "react-native-get-random-values";

AppRegistry.registerComponent(appName, () => App);
