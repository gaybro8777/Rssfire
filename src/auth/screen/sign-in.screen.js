import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import { resetNavigation } from '../../utils/index';
import { SignInButton, FullViewContainer } from '../../components/index';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      email: '',
      password: ''
    };
  }

  // Debug
  navigateHome() {
    const { navigation } = this.props;
    resetNavigation('Home', navigation);
  }

  props: {
    navigation: Object,
  };

  render() {
    return (
      <FullViewContainer>
        <KeyboardAvoidingView
          // style={}
          behavior="padding"
        >
          <Button
            // buttonStyle={}
            // textStyle={}
            containerViewStyle={{ width: '85%' }}
            title="Sign in with Facebook"
            // onPress={() => }
          />
          <Button
            // buttonStyle={}
            // textStyle={}
            containerViewStyle={{ width: '85%' }}
            title="Sign in with Twitter"
            // onPress={() => }
          />
          <Button
            // buttonStyle={}
            // textStyle={}
            containerViewStyle={{ width: '85%' }}
            title="Sign in with Google"
            // onPress={() => }
          />
          <TextInput
            // style={}
            placeholder={"Email Address"}
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <TextInput
            // style={}
            placeholder="Password"
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => this.setState({password: text})}
            secureTextEntry={true}
            value={this.state.password}
          />
          <Button
            // buttonStyle={}
            // textStyle={}
            containerViewStyle={{ width: '85%' }}
            title="Sign in with E-mail"
            // onPress={() => this.signInWithEmail() }
          />
          <Button
            // buttonStyle={}
            // textStyle={}
            containerViewStyle={{ width: '85%' }}
            title="Debug to error page"
            onPress={() => this.props.navigation.navigate('SignInError')}
          />
          <Button
            // buttonStyle={}
            // textStyle={}
            containerViewStyle={{ width: '85%' }}
            title="Debug to feed page"
            onPress={() => this.navigateHome()}
          />
        </KeyboardAvoidingView>
      </FullViewContainer>
    );
  }
}

export const SignInScreen = SignIn;
