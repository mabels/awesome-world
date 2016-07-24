/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import ContainerCSS from './container.css.js';

import WelcomeScreen from './welcome_screen';

class AwesomeWorld extends Component {
  render() {
    //this.switchNavBar(true);
    return (
       <NavigatorIOS
        style={{flex: 1}}
        navigationBarHidden={true}
        initialRoute={{
          title: "Awesome",
          component: WelcomeScreen,
        }}
       />
    );
  }
}

AppRegistry.registerComponent('AwesomeWorld', () => AwesomeWorld);

module.exports = AwesomeWorld;
