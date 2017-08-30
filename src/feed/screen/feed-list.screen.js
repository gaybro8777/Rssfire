import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { NoFeedNotification, FeedItem, LoadingIndicator } from '../../components/index';

class FeedList extends Component {
  constructor(props) {
    super(props);
  }

  // Debug
  _moveToWebView = () => {
    const { navigation } = this.props;
    navigation.navigate('Repository');
  }

  _moveToSubscribeView = () => {
    const { navigation } = this.props;
    navigation.navigate('Subscribe');
  }

  _pullRefresh = () => {
    const { snapshot, isPendingPullRefresh } = this.props;
    if(!isPendingPullRefresh) {
      this.props.refreshFeedsByDispatch(snapshot.feeds);
    }
  }

  props: {
    navigation: Object,
    uid: String,
    snapshot: Object,
    feeds: Array,
    hasFeedsInSnapshot: Boolean,
    isPendingGetSnapshot: Boolean,
    isPendingFetchFeeds: Boolean,
    isPendingPullRefresh: Boolean,
    error: String,
    getSnapshotByDispatch: Function,
    refreshFeedsByDispatch: Function,
  };

  componentWillMount() {
    const { uid } = this.props;
    // pre-fetch data from firebase
    this.props.getSnapshotByDispatch(uid);
  }

  componentDidMount() {

  }

  _keyExtractor = (item, index) => index;

  _onPressItem = (test) => {
    // console.log('Item link', item.link);
    console.log(test);
    console.log('onpress-');
  };

  _renderItem = ({item, index}) => (
    <FeedItem
      onPress={this._onPressItem}
      item={item}
      index={index}
    />
  );

  render() {
    const {
      navigation,
      uid,
      snapshot,
      feeds,
      hasFeedsInSnapshot,
      isPendingGetSnapshot,
      isPendingFetchFeeds,
      isPendingPullRefresh,
      error,
    } = this.props;

    // console.log('Snapshot', snapshot);
    // console.log('Has feeds', hasFeedsInSnapshot);
    // console.log('Feeds', feeds);
    // console.log('Error:', error);

    if(isPendingGetSnapshot || isPendingFetchFeeds) {
      return <LoadingIndicator />;
    }

    if(!hasFeedsInSnapshot) {
      return (
        <NoFeedNotification
          onPress={this._moveToSubscribeView}
        />
      );
    }

    return (
      <FlatList
        data={feeds}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        refreshing={isPendingPullRefresh}
        onRefresh={this._pullRefresh}
      />
    );
  }
}

export const FeedListScreen = FeedList;
