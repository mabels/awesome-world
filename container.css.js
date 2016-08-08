
import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(50, 165, 209, 0.05)',
  },
  header: {},
  awesomeworld: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 15,
    color: '#05A5D1'
  },
  instructions: {
    textAlign: 'center',
    color: '#05A5D1',
    marginBottom: 5,
  },
  menuselector: {
      height: 40,
      backgroundColor: 'powderblue',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
  },
  menuselectortitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#05A5D1',
  },

  mapcontainer: {
  //   position: 'absolute',
  // top: 0,
  // left: 0,
  // right: 0,
  // bottom: 0,
  height: 400,
  width: 400,
  justifyContent: 'flex-end',
  alignItems: 'center',
  },
  map: {
    position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
  },
});


module.exports = styles;
