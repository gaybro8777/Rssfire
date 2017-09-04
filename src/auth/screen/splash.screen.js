import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Button } from 'react-native-elements';

import { resetNavigation } from '../../utils/index';
import { FullViewContainer } from '../../components/index';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
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
      <View style={styles.viewContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
      </View>
    );
  }
}

export const SplashScreen = Splash;
