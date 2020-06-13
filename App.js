import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import Microphone from './src/components/Microphone';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
        <Microphone />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
