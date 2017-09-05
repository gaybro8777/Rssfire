import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  props: {
    navigation: Object,
    snapshot: Object,
  };

  render() {
    const {
      navigation,
      snapshot,
    } = this.props;

    const hasFeeds =  snapshot.hasOwnProperty('feeds');

    return (
      <View>
        <Text>Feed List</Text>
        {hasFeeds &&
          <List>
          {
            Object.keys(snapshot.feeds).map((key, index) => {
              const title = snapshot.feeds[key]['title'];
              const url = snapshot.feeds[key]['url'];

              return (
                <ListItem
                  key={index}
                  title={title}
                  onPress={() => console.log(url)}
                />
              )
            })
          }
          </List>
        }
        <Button
          title='Logout'
        />
      </View>
    );
  }
}

export const DrawerScreen = Drawer;
