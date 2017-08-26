import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, Image, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { FeedListItem, NoFeedNotification } from '../../components/index';

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
    uid: String,
    snapshot: Object,
    feeds: Object,
    hasFeedsInSnapshot: Boolean,
    isPendingGetSnapshot: Boolean,
    isPendingFetchFeeds: Boolean,
    error: String,
    getSnapshotByDispatch: Function,
  };

  componentWillMount() {
    const { uid } = this.props;
    // pre-fetch data from firebase
    this.props.getSnapshotByDispatch(uid);
  }

  componentDidMount() {
    console.log('did mount');
  }

  render() {
    const {
      navigation,
      uid,
      snapshot,
      feeds,
      hasFeedsInSnapshot,
      isPendingGetSnapshot,
      isPendingFetchFeeds,
      error,
    } = this.props;

    // console.log('Snapshot', snapshot);
    // console.log('Has feeds', hasFeedsInSnapshot);
    // console.log('Feeds', feeds);
    console.log('Error:', error);

    // TODO
    // if feeds have no data, this view will be shown ADD RSS something.
    // others, call to fetch feeds dispatch

    // TODO
    // feeds include rss data object
    //

    // isPendingGetSnapshot == true
    // loading View

    if(isPendingGetSnapshot) {
      console.log('Loding isPendingGetSnapshot');
      // return loading view

      return (
        <View>
          <ActivityIndicator/>
        </View>
      );
    }

    // hasFeedsInSnapshot == true
    // call fetch feeds

    if(hasFeedsInSnapshot && !isPendingFetchFeeds) {
      // hasFeed true & is not fetching
      console.log('Has Feed List call get feed');
      // call get feed
      console.log('Feeds', snapshot.feeds);
    }

    // false
    // show add feed view

    if(!hasFeedsInSnapshot) {
      return <NoFeedNotification
        onPress={() => console.log('Move to subscribe view')}
      />
    }

    // isPendingFetchFeeds == true
    // loading view

    if(isPendingFetchFeeds) {
      console.log('Loding isPendingFetchFeeds');
      // return loading view
      return (
        <View>
          <ActivityIndicator/>
        </View>
      );
    }

    // false
    // show feeds list

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
