import React, { Component } from 'react';
import { WebView } from 'react-native';

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
      />
    );
  }
}

export const FeedWebViewScreen = FeedWebView;
