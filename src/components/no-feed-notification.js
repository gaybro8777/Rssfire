import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  fullViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export const NoFeedNotification = ({onPress}) =>
  <LinearGradient colors={['#2980b9', '#2c3e50']} style={styles.fullViewContainer}>
    <View>
      <Text>There is no feed.</Text>
      <Button
        buttonStyle={styles.buttonStyle}
        onPress={onPress}
        fontSize={18}
        underlayColor="transparent"
        title="ADD FEED"
      />
    </View>
  </LinearGradient>;
