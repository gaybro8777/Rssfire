import React, { Component } from 'react';
import { WebView } from 'react-native';
import { LoadingIndicator } from '../../components/index';

class FeedWebView extends Component {
  constructor(props) {
    super(props);
  }

  props: {
    navigation: Object,
    error: String,
    getDatabaseByDispatch: Function,
  };

  render() {
    const {
      link
    } = this.props.navigation.state.params.item;

    return (
      <WebView
        source={{ uri: link }}
        renderLoading={() => <LoadingIndicator />}
        startInLoadingState
      />
    );
  }
}

export const FeedWebViewScreen = FeedWebView;
