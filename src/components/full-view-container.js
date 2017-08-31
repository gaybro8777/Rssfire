import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  fullViewContainer: {
    flex: 1,
    // flexDirection: 'column',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});

export const FullViewContainer = ({children}) =>
  <LinearGradient colors={['#325775', '#1B3951']} style={styles.fullViewContainer}>
    {children}
  </LinearGradient>;
