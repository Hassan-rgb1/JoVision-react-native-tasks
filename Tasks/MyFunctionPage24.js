import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ForwardRef is used to forward the ref from the parent component to the child
const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  // Expose the method to update text to the parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText);
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text || 'Waiting for input...'}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default MyFunctionPage;
