/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import './src/globalStates';

AppRegistry.registerComponent(appName, () => App);
