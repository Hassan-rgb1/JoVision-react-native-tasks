import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyFunctionPage from './MyFunctionPage22';

const Task22 = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Typed Text:</Text>
      <Text style={styles.displayText}>{text || 'Start typing...'}</Text>
      <MyFunctionPage onTextChange={setText} />
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

export default Task22;
