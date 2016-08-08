import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';


import WelcomeScreen from './welcome_screen';
import MapScreen from './map_screen';

module.exports = (route, navigator) => {
  //console.log(route);
  if (route.component === MapScreen) {
    return (<MapScreen navigator={navigator} />);
  }
  return (<WelcomeScreen navigator={navigator} />);
}
