import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  fullViewContainer: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    alignItems: 'stretch',
    justifyContent: 'center',
    // alignItems: 'center',
  },
});

export const FullViewContainer = ({children}) =>
  <View style={styles.fullViewContainer}>
    {children}
  </View>;
