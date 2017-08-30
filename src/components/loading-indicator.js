import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  indicatorInner: {
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 15,
    opacity: 0.9,
  },
});

export const LoadingIndicator = () =>
  <View style={styles.indicatorContainer}>
    <View style={styles.indicatorInner}>
      <ActivityIndicator
        size="large"
        color="#fff"
      />
    </View>
  </View>;
