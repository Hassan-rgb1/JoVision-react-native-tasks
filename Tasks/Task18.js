// Task18.js
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Task18 = () => {
  // Step 1: Define state variables
  const [loading, setLoading] = useState(true); // Tracks whether the app is loading

  // Step 2: Use `useEffect` to manage the timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  // Step 3: Conditional rendering based on `loading` state
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // Step 4: Render the final screen with your name
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Hassan</Text>
    </View>
  );
};

// Step 5: Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Task18;