import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MyFunctionPage from './MyFunctionPage21';

const Task21 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show" onPress={() => setShowPage(!showPage)} />
      {showPage && <MyFunctionPage />}
    </View>
  );
};

export default Task21;
