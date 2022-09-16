/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from '../spotify/src/Routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
