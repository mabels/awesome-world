
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Animated,
  View
} from 'react-native';

import ContainerCSS from './container.css';
import MenuSelector from './menu_selector';


class MapScreen extends React.Component {
   constructor(props) {
     super(props);
   }

   componentDidMount() {
   }
   render() {
     return (
       <MenuSelector>
         <View style={ContainerCSS.container}>
            <Text style={ContainerCSS.header}>
             AweSome
            </Text>
          </View>
        </MenuSelector>
     );
   }
 }

MapScreen.defaultProps = {
    title: 'AwesomeWorld'
};

module.exports = MapScreen;
