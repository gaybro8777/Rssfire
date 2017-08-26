import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

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
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export const NoFeedNotification = ({onPress}) =>
  <View>
    <Text>There is no feed.</Text>
    <Button
      buttonStyle={styles.buttonStyle}
      onPress={onPress}
      fontSize={18}
      underlayColor="transparent"
      title="ADD FEED"
    />
  </View>;
