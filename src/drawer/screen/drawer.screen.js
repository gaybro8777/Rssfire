import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

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

    console.log(snapshot);

    if (Object.keys(snapshot).length === 0) { console.log('length 0') }

    // const hasFeeds = () => {
    //   if(snapshot
    // }

    return (
      <View>
        <Text>Feed List</Text>
        <List>
          <ListItem
            key="key-logout"
            title="Logout"
          />
        </List>
      </View>
    );
  }
}

// <List>
// {
//   list.map((l, i) => (
//     <ListItem
//       key={i}
//       title={l.name}
//     />
//   ))
// }
// </List>

export const DrawerScreen = Drawer;
