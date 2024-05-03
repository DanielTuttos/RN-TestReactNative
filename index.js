/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { TestApp } from './src/TestApp';

AppRegistry.registerComponent(appName, () => TestApp);
