import React, { Component, createRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MyClassPage from './MyClassPage25';

class Task25 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.myClassPageRef = createRef(); // Create a ref for MyClassPage
  }

  handleTextChange = (newText) => {
    this.setState({ text: newText });
    // Using ref to call updateText method in MyClassPage
    if (this.myClassPageRef.current) {
      this.myClassPageRef.current.updateText(newText);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          onChangeText={this.handleTextChange}
        />
        <MyClassPage ref={this.myClassPageRef} />
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
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Task25;
