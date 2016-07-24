/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import WelcomeScreen from './welcome_screen';

class AwesomeWorld extends Component {
  render() {
    return (
      <WelcomeScreen />
    );
  }
}

AppRegistry.registerComponent('AwesomeWorld', () => AwesomeWorld);
