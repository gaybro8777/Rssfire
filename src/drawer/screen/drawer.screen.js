import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  props: {
    navigation: Object,
    snapshot: Object,
  };

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const {
      navigation,
      snapshot,
    } = this.props;

    console.log('Drawer Props:' + JSON.stringify(this.props));

    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
}

export const DrawerScreen = Drawer;
