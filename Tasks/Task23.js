import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyClassPage from './MyClassPage23';

class Task23 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Typed Text:</Text>
        <Text style={styles.displayText}>{this.state.text || 'Start typing...'}</Text>
        <MyClassPage onTextChange={this.updateText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  displayText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
});

export default Task23;
