import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded'); 
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MyFunctionPage!</Text>
    </View>
  );
};

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

export default MyFunctionPage;
