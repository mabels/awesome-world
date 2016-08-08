import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';

import ContainerCSS from './container.css';

class ControlPanel extends React.Component {
  // <Button
  //   onPress={this.props.closeDrawer}
  //   text="Close Drawer"
  //   />

  render() {
    return (
      <View >
        <Text >
          Control Panel
        </Text>
      </View>
    );
  }
}

module.exports = ControlPanel;
