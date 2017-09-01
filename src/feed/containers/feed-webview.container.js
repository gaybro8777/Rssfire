import React from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { FeedWebViewScreen } from '../screen/feed-webview.screen';

export const FeedWebviewContainer = connect(null, null)(FeedWebViewScreen);
