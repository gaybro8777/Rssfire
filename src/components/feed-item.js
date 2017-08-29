import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native';

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
    fontSize: 14,
  },
  textSite : {
    fontSize: 11,
  },
  textDescription: {
    fontSize: 12,
  },
});

export class FeedItem extends Component {
  constructor(props) {
    super(props);
  }

  _onPress = () => {
    console.log('feed-item press');
  };

  render() {
    const {
      index,
      title,
      link,
      pubDate,
      description,
      content,
      siteName,
    } = this.props;

    return (
      <TouchableHighlight activeOpacity={0.1} onPress={this._onPress}>
        <View key={index} style={styles.itemContainer}>
          <Image
            style={styles.imageContainer}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.textDescription} numberOfLines={2}>{description}</Text>
            <Text style={styles.textSite} numberOfLines={1}>
              <Text>{siteName.length < 15 ? siteName : `${siteName.substring(0, 15)}...`}</Text>
              <Text> | </Text>
              <Text>{pubDate}</Text>
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
