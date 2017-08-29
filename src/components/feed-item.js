import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  imageContainer: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  textTitle : {
    fontWeight: 'bold',
  },
  textSite : {
    fontSize: 12,
  },
});

export const FeedItem = ({index, title, desc, site}) =>
  <View key={index} style={styles.itemContainer}>
    <Image
      style={styles.imageContainer}
      source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
    />
    <View style={styles.textContainer}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textSite} numberOfLines={1}>{site}</Text>
    </View>
  </View>;
