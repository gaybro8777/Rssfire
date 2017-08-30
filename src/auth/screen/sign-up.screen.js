import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Text } from 'react-native';

import { resetNavigation } from '../../utils/index';
import { SignUpButton, FullViewContainer } from '../../components/index';

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
  },
  noticeText: {
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 17,
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  // Debug
  _moveToLogin = () => {
    const { navigation } = this.props;
    // navigation.navigate('Login');
    resetNavigation('Login', navigation);
  }

  props: {
    navigation: Object,
    uid: String,
    user: Object,
    isPendingSignUp: Boolean,
    error: String,
    signUpWithGoogleByDispatch: Function,
    signUpWithEmailByDispatch: Function,
  };

  componentWillMount() {
    // console.log('Exec componentWillMount');
  }

  componentDidMount() {
    // console.log('Exec componentDidMount');
  }

  render() {
    const {
      navigation,
      uid,
      user,
      isPendingSignUp,
      error,
    } = this.props;

    console.log('UID:', uid);
    // console.log('User: ', JSON.stringify(user));
    // console.log('Error:', error);

    // console.log('Props:' + JSON.stringify(this.props));

    return (
      <FullViewContainer>
        <KeyboardAvoidingView
          style={{width: '100%'}}
          behavior="padding">

          <TextInput
            style={styles.textInput}
            placeholder={"Email Address"}
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => this.setState({password: text})}
            secureTextEntry={true}
            value={this.state.password}
            underlineColorAndroid="transparent"
          />

          <SignUpButton
            type="E-mail"
            onPress={() => this.props.signUpWithEmailByDispatch(this.state.email, this.state.password, navigation)}
          />

          <Text style={styles.noticeText}>Already have an account? <Text onPress={this._moveToLogin}>Login</Text></Text>

        </KeyboardAvoidingView>
      </FullViewContainer>
    );
  }
}

export const SignUpScreen = SignUp;
