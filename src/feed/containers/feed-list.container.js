import React, { Component } from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { FeedListScreen } from '../screen/feed-list.screen';

import {
  SYSTEM_GET_SNAPSHOT,
  SYSTEM_GET_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from '../feed-type';

// set state from reducer
const mapStateToProps = state => ({
  user: state.auth.user,
  snapshot: state.feed.snapshot,
  feeds: state.feed.feeds,
  categories: state.feed.categories,
  isPendingGetSnapshot: state.feed.isPendingGetSnapshot,
  isPendingFetchFeeds: state.feed.isPendingFetchFeeds,
  error: '',
});

// set dispatch to saga
const mapDispatchToProps = dispatch => ({
  getSnapshotByDispatch: userId => {
    dispatch({
      type: SYSTEM_GET_SNAPSHOT.PENDING,
      userId
    })
  },
  getFeedsByDispatch: feeds => {
    dispatch({
      type: SYSTEM_GET_FEEDS.PENDING,
      feeds
    })
  },
});

export const FeedListContainer = connect(mapStateToProps, mapDispatchToProps)(FeedListScreen);
