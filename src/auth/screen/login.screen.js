import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import { resetNavigation } from '../../utils/index';
import { LoginButton, FullViewContainer } from '../../components/index';

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: ''
    };
  }

  // Debug
  _moveToSignUp = () => {
    const { navigation } = this.props;
    // navigation.navigate('SignUp');
    resetNavigation('SignUp', navigation);
  }

  props: {
    navigation: Object,
    user: Object,
    isPendingLogin: Boolean,
    isPendingLogout: Boolean,
    error: String,
    loginWithEmailByDispatch: Function,
    logoutByDispatch: Function,
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
      user,
      isPendingLogin,
      isPendingLogout,
      error,
    } = this.props;

    console.log('User:', user);
    console.log('Error:', error);

    // console.log('Props:' + JSON.stringify(user));

    return (
      <FullViewContainer>
        <KeyboardAvoidingView
          style={{width: '100%'}}
          behavior="padding"
        >
          <LoginButton
            type="Facebook"
            // onPress={}
          />
          <LoginButton
            type="Twitter"
            // onPress={}
          />
          <LoginButton
            type="Google"
            // onPress={}
          />
          <TextInput
            style={styles.textInput}
            placeholder={"Email Address"}
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => this.setState({password: text})}
            secureTextEntry={true}
            value={this.state.password}
          />
          <LoginButton
            type="E-mail"
            onPress={() => this.props.loginWithEmailByDispatch(this.state.email, this.state.password, navigation)}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            onPress={this._moveToSignUp}
            fontSize={18}
            title="Don't have an account? Sign up"
          />
        </KeyboardAvoidingView>
      </FullViewContainer>
    );
  }
}

export const LoginScreen = Login;
