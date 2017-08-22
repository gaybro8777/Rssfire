import React, { Component } from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { FeedWebViewScreen } from '../screen/feed-webview.screen';

import {
  SYSTEM_GET_DATABASE,
  SYSTEM_GET_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from '../feed-type';

// set state from reducer
const mapStateToProps = state => ({
  url: state.feed.url,
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

export const FeedWebviewContainer = connect(mapStateToProps, mapDispatchToProps)(FeedWebViewScreen);
