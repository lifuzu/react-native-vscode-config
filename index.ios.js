/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const add = (a: number, b: number): number => a + b;
add(1, 5, test);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class SweetApp extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text styles={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text styles={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('SweetApp', () => SweetApp);
