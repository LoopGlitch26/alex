import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Login from './src/lib/facebook/authentication';
import { message } from './src/lib/wit/message';

export default function App() {
  async function getData() {
    const request = await message('I am 20 years old');
    const data = await request.json();
    console.warn('WIT response', data);
  };
  return (
    <View style={styles.container}>
      <Login />
      <TouchableOpacity
        onPress={getData}>
        <Text>press here to send /message to wit.ai</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
