/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import { AppRegistry } from 'react-native';
import { Client } from 'bugsnag-react-native';
import App from './src/App';

if(__DEV__ !== true) {
  const bugsnag = new Client();
}
AppRegistry.registerComponent('RssFire', () => App);
