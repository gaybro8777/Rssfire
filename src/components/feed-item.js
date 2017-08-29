import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const styles = StyleSheet.create({
  fullViewContainer: {
    flex: 1,
    // flexDirection: 'column',
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    justifyContent: 'center',
    // alignItems: 'stretch',
    alignItems: 'center',
  },
});

export const FeedItem = ({index, title, desc}) =>
  <View key={index}>
    <Text>{index}</Text>
    <Text>{title}</Text>
  </View>;
