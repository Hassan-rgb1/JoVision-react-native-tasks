import React, { useState, useRef } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import MyFunctionPage from './MyFunctionPage24';

const Task24 = () => {
  const [text, setText] = useState('');
  const myFunctionPageRef = useRef();

  const handleTextChange = (newText) => {
    setText(newText);
    if (myFunctionPageRef.current) {
      myFunctionPageRef.current.updateText(newText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        onChangeText={handleTextChange}
      />
      <MyFunctionPage ref={myFunctionPageRef} />
    </View>
  );
};

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

export default Task24;
