import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to MyClassPage!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyClassPage;
