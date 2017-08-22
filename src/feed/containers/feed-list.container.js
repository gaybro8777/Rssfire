import React, { Component } from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { FeedListScreen } from '../screen/feed-list.screen';

import {
  SYSTEM_GET_DATABASE,
  SYSTEM_GET_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from '../feed-type';

// set state from reducer
const mapStateToProps = state => ({
  database: state.feed.database,
  feeds: state.feed.data,
  isPendingGetDatabase: state.feed.isPendingGetDatabase,
  isPendingFetchFeeds: state.feed.isPendingFetchFeeds,
  error: '',
});

// set dispatch to saga
const mapDispatchToProps = dispatch => ({
  getDatabaseByDispatch: () => {
    dispatch({
      type: SYSTEM_GET_DATABASE.PENDING
    })
  },
});

export const FeedListContainer = connect(mapStateToProps, mapDispatchToProps)(FeedListScreen);
