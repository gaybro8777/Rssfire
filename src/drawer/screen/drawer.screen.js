import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
  drawerContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  logoutButton: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  logoutText: {
    fontSize: 18,
    color: '#fa6458',
  },
});

class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  props: {
    navigation: Object,
    snapshot: Object,
    tryLogoutByDispatch: Function,
  };

  render() {
    const {
      navigation,
      snapshot,
    } = this.props;

    const hasFeeds =  snapshot.hasOwnProperty('feeds');

    return (
      <ScrollView>
        <View style={styles.drawerContainer}>
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
            textStyle={styles.logoutText}
            buttonStyle={styles.logoutButton}
            title='Logout'
            onPress={() => this.props.tryLogoutByDispatch(navigation)}
          />
        </View>
      </ScrollView>
    );
  }
}

export const DrawerScreen = Drawer;
