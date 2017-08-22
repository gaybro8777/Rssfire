import React, { Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { FeedListItem } from '../../components/index';

class FeedList extends Component {
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

  // Debug
  _moveToWebView = () => {
    const { navigation } = this.props;
    navigation.navigate('Repository');
  }

  props: {
    navigation: Object,
    database: Object,
    feeds: Object,
    isPendingFetchFeeds: Boolean,
    error: String,
    getDatabaseByDispatch: Function,
  };

  componentWillMount() {
    // this.props.getDatabaseByDispatch;
  }

  componentDidMount() {
    // console.log('Exec componentDidMount');
  }

  render() {
    return (
      <View>
      <Button
        onPress={() => console.log('test') }
        title={`Test`}
      />
      </View>
    );
  }
}

export const FeedListScreen = FeedList;
