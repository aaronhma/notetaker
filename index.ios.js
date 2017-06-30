import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import Main from './App/Components/Main';

let styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

export default class message extends Component {
  render() {
      return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Second Hand Helpers Team Notetaker',
          component: Main
      }} />
      );
  }
}

AppRegistry.registerComponent('message', () => message);