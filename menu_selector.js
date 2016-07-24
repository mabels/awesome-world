
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Animated,
  View
} from 'react-native';

import ContainerCSS from './container.css';
import { FBLogin } from 'react-native-facebook-login';


class MenuSelector extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       menuTextSize: new Animated.Value(1),
       menuHeight: new Animated.Value(40),
       visible: true
     };
   }

   componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.menuTextSize,    // The value to drive
       {
         delay: 2000,
         toValue: 0,
         duration: 200
       }    // Configuration
     ).start();
     Animated.timing(          // Uses easing functions
       this.state.menuHeight,    // The value to drive
       {
         delay: 2000,
         toValue: 0,
         duration: 200
       }    // Configuration
     ).start();
   }

   render() {
     return (
      <View>
        <Animated.View style={[
          ContainerCSS.menuselector,
          {
            height: this.state.menuHeight,
            transform: [                        // `transform` is an ordered array
              {scale: this.state.menuTextSize},  // Map `bounceValue` to `scale`
            ]
          }
        ]}>
            <Text style={ContainerCSS.menuselectortitle}>
             AweSome
            </Text>
            <FBLogin />
        </Animated.View>
        {this.props.children}
      </View>
     );
   }
 }

module.exports = MenuSelector;
