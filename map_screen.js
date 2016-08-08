import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Animated,
    View
} from 'react-native';

import MapView from 'react-native-maps';

import ContainerCSS from './container.css';
import MenuSelector from './menu_selector';
import GeoLocation from './geo_location';


class MapScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}
        //  <MenuSelector>
        //   </MenuSelector>

    render() {
        return (
          <View style = {
                ContainerCSS.container
            } >
            <Text style = {
                ContainerCSS.header
            } >AweSome </Text>
            <GeoLocation>

            </GeoLocation>
            <Text>Wurst</Text>
            </View>
        );
    }
}

MapScreen.defaultProps = {
    title: 'AwesomeWorld'
};

module.exports = MapScreen;
