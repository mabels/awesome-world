
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Animated,
  View
} from 'react-native';

import ContainerCSS from './container.css';
import Drawer from 'react-native-drawer';
import ControlPanel from './control_panel';

//import { FBLogin } from 'react-native-facebook-login';


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

   closeControlPanel = () => {
     this._drawer.close()
   };
   openControlPanel = () => {
     this._drawer.open()
   };

   render() {
     return (
       <Drawer ref={(ref) => this._drawer = ref} content={<ControlPanel />} >
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
            </Animated.View>
            {this.props.children}
          </View>
       </Drawer>
     );
   }
 }

module.exports = MenuSelector;
