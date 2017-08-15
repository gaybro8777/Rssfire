import React, { Component } from 'react';
// temp
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <View>
          <Text>This is a proto type. It works.</Text>
        </View>
      </Provider>
    );
  }
}
