import React, { Component } from 'react';
import { WebView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { LoadingIndicator } from '../../components/index';

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
      <View style={styles.wrapper}>
        <WebView
          source={{ uri: link }}
          renderLoading={() => <LoadingIndicator />}
          startInLoadingState
        />
        <View style={styles.bottomContainer}>
          <Icon
            name='ios-arrow-back'
            type='ionicon'
            size={30}
            iconStyle={styles.iconBase}
            onPress={() => console.log('test') } />
          <Icon
            name='ios-arrow-forward'
            type='ionicon'
            size={30}
            iconStyle={styles.iconBase}
            onPress={() => console.log('test') } />
          <Icon
            name='ios-refresh'
            type='ionicon'
            size={33}
            iconStyle={[styles.iconBase, styles.refreshIcon]}
            onPress={() => console.log('test') } />
          <Icon
            name='share-apple'
            type='evilicon'
            size={32}
            iconStyle={styles.iconBase}
            onPress={() => console.log('test') } />
        </View>
      </View>
    );
  }
}

export const FeedWebViewScreen = FeedWebView;
