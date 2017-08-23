import React, { Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { FeedListItem } from '../../components/index';

class FeedList extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Icon
          name='ios-add'
          type='ionicon'
          color='#f50'
          onPress={() => navigation.navigate('Subscribe')} />
      ),
    }
  }

  // Debug
  _moveToWebView = () => {
    const { navigation } = this.props;
    navigation.navigate('Repository');
  }

  props: {
    navigation: Object,
    user: Object,
    snapshot: Object,
    feeds: Object,
    isPendingGetSnapshot: Boolean,
    isPendingFetchFeeds: Boolean,
    error: String,
    getSnapshotByDispatch: Function,
  };

  componentWillMount() {
    // const { user } = this.props;
    // pre-fetch data from firebase
    this.props.getSnapshotByDispatch('testuser');
  }

  componentDidMount() {
  }

  render() {
    const {
      navigation,
      user,
      snapshot,
      feeds,
      isPendingFetchFeeds,
      error,
    } = this.props;

    console.log('Snapshot', snapshot);
    console.log('Feeds', feeds);
    // no data -> undefined
    console.log('Error:', error);

    // TODO
    // if feeds have no data, this view will be shown ADD RSS something.
    // others, call to fetch feeds dispatch

    // TODO
    // feeds include rss data object
    //

    return (
      <View>
      <Button
        onPress={() => console.log('test') }
        title={`Test`}
      />
      </View>
    );
  }
}

export const FeedListScreen = FeedList;
