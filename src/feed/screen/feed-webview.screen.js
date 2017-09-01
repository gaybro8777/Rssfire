import React, { Component } from 'react';
import { Share, WebView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { LoadingIndicator } from '../../components/index';

const WEBVIEW = "WEBVIEW_REF";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  webViewContainer: {
    width: '100%',
    height: '95%',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconBase: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  refreshIcon: {
    position: 'relative',
    top: 1,
  },
});

class FeedWebView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      url: '',
      canGoBack: false,
      canGoForward: false,
    };
  }

  props: {
    navigation: Object,
  };

  _shareAction = () => {
    Share.share(
      {
        message: `${this.state.title}`,
        title: 'Share this content',
        url: `${this.state.url}`,
      },
      {
        // Android only:
        dialogTitle: 'Android dialog',
        // iOS only:
        // excludedActivityTypes: [
        //   'com.apple.UIKit.activity.PostToTwitter'
        // ]
      }
    );
  }

  _navigationStateChange = webview => {
    // console.log('Web View:', webview);
    this.setState({
      title: webview.title,
      url: webview.url,
      canGoBack: webview.canGoBack,
      canGoForward: webview.canGoForward,
    });
  };

  _goBack = () => {
    if(this.state.canGoBack) {
      this.refs[WEBVIEW].goBack();
    }
  };

  _goForward = () => {
    if(this.state.canGoForward) {
      this.refs[WEBVIEW].goForward();
    }
  };

  _reload = () => {
    this.refs[WEBVIEW].reload();
  };

  render() {
    const {
      link
    } = this.props.navigation.state.params.item;

    return (
      <View style={styles.wrapper}>
        <WebView
          ref={WEBVIEW}
          source={{ uri: link }}
          onNavigationStateChange={this._navigationStateChange.bind(this)}
          renderLoading={() => <LoadingIndicator />}
          startInLoadingState
        />
        <View style={styles.bottomContainer}>
          <Icon
            name='ios-arrow-back'
            type='ionicon'
            size={30}
            iconStyle={styles.iconBase}
            onPress={this._goBack} />
          <Icon
            name='ios-arrow-forward'
            type='ionicon'
            size={30}
            iconStyle={styles.iconBase}
            onPress={this._goForward} />
          <Icon
            name='ios-refresh'
            type='ionicon'
            size={33}
            iconStyle={[styles.iconBase, styles.refreshIcon]}
            onPress={this._reload} />
          <Icon
            name='share-apple'
            type='evilicon'
            size={32}
            iconStyle={styles.iconBase}
            onPress={this._shareAction} />
        </View>
      </View>
    );
  }
}

export const FeedWebViewScreen = FeedWebView;
