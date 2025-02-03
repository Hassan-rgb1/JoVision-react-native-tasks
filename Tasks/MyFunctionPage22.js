import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MyFunctionPage = ({ onTextChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        onChangeText={onTextChange} // Updates parent component
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default MyFunctionPage;
