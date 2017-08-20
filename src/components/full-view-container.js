import React from 'react';
import { StyleSheet, View } from 'react-native';

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

export const FullViewContainer = ({children}) =>
  <View style={styles.fullViewContainer}>
    {children}
  </View>;
