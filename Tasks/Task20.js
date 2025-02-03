import React, { Component } from 'react';
import { View, Button } from 'react-native';
import MyClassPage from './MyClassPage20';

class Task20 extends Component {
  constructor(props) {
    super(props);
    this.state = { showPage: false };
  }

  togglePage = () => {
    this.setState((prevState) => ({ showPage: !prevState.showPage }));
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Show" onPress={this.togglePage} />
        {this.state.showPage && <MyClassPage />}
      </View>
    );
  }
}

export default Task20;
