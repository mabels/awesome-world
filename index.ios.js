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
  Navigator,
  View
} from 'react-native';

import ContainerCSS from './container.css.js';

import WelcomeScreen from './welcome_screen';

import Router from './router';

class AwesomeWorld extends Component {
  render() {
    //this.switchNavBar(true);
           //
          //  <NavigatorIOS
          //   style={{flex: 1}}
          //   navigationBarHidden={true}
          //   initialRoute={{
          //     title: "Awesome",
          //     component: WelcomeScreen,
          //   }}

    return (
      <Navigator
          initialRoute={{ component: WelcomeScreen, title: 'Awesome Scene', index: 0 }}
          renderScene={Router}
       />
    );
  }
}

AppRegistry.registerComponent('AwesomeWorld', () => AwesomeWorld);

module.exports = AwesomeWorld;
