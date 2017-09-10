import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../utils/index';

const styles = StyleSheet.create({
  fullViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  largeText: {
    fontSize: 22,
  },
});

export const NoFeedNotification = ({onPress}) =>
    <View style={styles.fullViewContainer}>
      <Text style={styles.largeText}>There is no feed.</Text>
      <Button
        backgroundColor={`${colors.accentColor}`}
        buttonStyle={styles.buttonStyle}
        onPress={onPress}
        fontSize={19}
        underlayColor="transparent"
        title="ADD FEED"
      />
    </View>;
