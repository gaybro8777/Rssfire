import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import { resetNavigation } from '../../utils/index';
import { FullViewContainer } from '../../components/index';

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
  },
});

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  props: {
    navigation: Object,
    uid: String,
    isAuthenticated: Boolean,
    error: String,
    checkAuthUserByDispatch: Function,
  };

  componentWillMount() {
    const { navigation } = this.props;
    this.props.checkAuthUserByDispatch(navigation);
  }

  componentDidMount() {

  }

  render() {
    const {
      navigation,
      uid,
    } = this.props;

    // Debug
    // console.log('UID:', uid);

    return (
      <FullViewContainer>
        <Text>Splash</Text>
      </FullViewContainer>
    );
  }
}

export const SplashScreen = Splash;
