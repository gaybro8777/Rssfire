import React, { Component } from 'react';
import { WebView } from 'react-native';

class FeedWebView extends Component {
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

  props: {
    navigation: Object,
    feeds: Object,
    isPendingFetchFeeds: Boolean,
    error: String,
    getDatabaseByDispatch: Function,
  };

  render() {
    return (
      <WebView
        source={{ uri: 'https://www.google.ca' }}
        style={{ marginTop: 0 }}
      />
    );
  }
}

export const FeedWebViewScreen = FeedWebView;
