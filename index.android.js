 /*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import WelcomeScreen from './welcome_screen';
import Router from './router';

class AwesomeWorld extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{ component: WelcomeScreen, title: 'Awesome Scene', index: 0 }}
          renderScene={Router}
        />
    );
  }
}

AppRegistry.registerComponent('AwesomeWorld', () => AwesomeWorld);
