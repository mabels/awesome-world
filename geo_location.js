
import React, { Component } from 'react';
import {
  Text,
  Animated,
  View
} from 'react-native';
import ContainerCSS from './container.css';
import MapView from 'react-native-maps';

class GeoLocation extends React.Component {
  constructor(props) {
    super(props);
    this.watchID = 0;
    this.regionSet = false;
     this.state = {
      initialPosition: 'unknown',
      region: {
        latitude: 52.78825,
        longitude: 10.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      error: 'noerror',
      markers: {
        "me": {
          key: "me",
          latlng: {
            latitude: 52.78825,
            longitude: 10.4324,
          },
          title: "Me",
          description: "Just Me"
        }
      }
    };
  }

  componentDidMount() {
    console.log("GeoLocation::componentDidMount");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("GeoLocation::initialPosition");
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => {
        console.log("GeoLocation::error", error);
        this.setState({error: error.message});
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 5000
      }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // console.log("GeoLocation::watchPosition", position);
      if (!this.regionSet) {
        this.regionSet = true;
        this.setState({
          region : {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }
        });
      }
      this.setState({
        markers: {
          me: {
            latlng: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          }
        }
      })
      //this.setState({this.markers
      //var lastPosition = JSON.stringify(position);
      // position.latitudeDelta = 0.015;
      // position.longitudeDelta = 0.0121;
      // this.setState({
      //    region: {
      //    latitude: position.latitude,
      //    longitude: position.longitude,
      //    latitudeDelta: 0.015,
      //    longitudeDelta: 0.0121
      //  }
      // });
    },
    (error) => {
        console.log("GeoLocation::Watch::error", error);
        this.setState({error: error.message});
    },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 0
      });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  onRegionChange(region) {
    console.log("GeoLocation::onRegionChange", region);
    this.setState({"region": region});
  }

  render() {
    return (
      <View>
        <Text>
          <Text>Current position: </Text>
          {JSON.stringify(this.state.markers.me.latlng)}
        </Text>
        <Text>
          <Text>Current region: </Text>
          {JSON.stringify(this.state.region)}
        </Text>
        <Text>
          <Text>Error: </Text>
          {this.state.error}
        </Text>
        <View style = { ContainerCSS.mapcontainer } >
        <MapView
          style={ContainerCSS.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
        >
        {Object.keys(this.state.markers).map((key) => {
          var marker = this.state.markers[key];
          return <MapView.Marker
            key={key}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        })}
        </MapView>
        </View>
      </View>
    );
  }
}

module.exports = GeoLocation;
