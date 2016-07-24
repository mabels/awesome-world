
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Animated,
  View
} from 'react-native';

import ContainerCSS from './container.css';
import MapScreen from './map_screen';


class WelcomeScreen extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
     };
   }
   componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {
        toValue: 1,
        duration: 2000
       }            // Configuration
     ).start(() => {
       //console.log("hallo", this.props.navigator.);
       this.props.navigator.replace({
          title: 'AwesomeWorld',
          component: MapScreen,
       });
       //this.props.
     });                // Don't forget start!
   }
   render() {
     return (
       <View style={ContainerCSS.container}>
       <Animated.View style={
         {
           transform: [                        // `transform` is an ordered array
             {scale: this.state.fadeAnim},  // Map `bounceValue` to `scale`
           ],
           opacity: this.state.fadeAnim
         }}>
          <Text style={ContainerCSS.instructions}>
           Welcome to the
          </Text>
          <Text style={ContainerCSS.awesomeworld}>
           Awesome World
          </Text>
          <Text style={ContainerCSS.instructions}>
           long time ago we meet
          </Text>
          <Text style={ContainerCSS.instructions}>
           people in real World
          </Text>
          <Text style={ContainerCSS.instructions}>
           now do it again!
          </Text>
        </Animated.View>
        </View>
     );
   }
 }



module.exports = WelcomeScreen;
