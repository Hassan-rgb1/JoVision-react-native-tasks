import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  // This method will be called by the parent using ref
  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.text || 'Waiting for input...'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default MyClassPage;
