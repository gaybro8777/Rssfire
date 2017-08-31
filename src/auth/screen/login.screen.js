import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { resetNavigation } from '../../utils/index';
import { LoginButton, FullViewContainer } from '../../components/index';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#fff',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  icon: {
    width: 30,
  },
  mailIcon: {
    position: 'relative',
    right: 8,
  },
  passwordIcon: {
    position: 'relative',
    right: 2,
  },
  textInput: {
    width: '80%',
    color: '#fff',
  },
  noticeText: {
    marginTop: 20,
    marginBottom: 10,
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 17,
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

  _moveToSignUp = () => {
    const { navigation } = this.props;
    resetNavigation('SignUp', navigation);
  }

  props: {
    navigation: Object,
    uid: String,
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
      uid,
      isPendingLogin,
      isPendingLogout,
      error,
    } = this.props;

    console.log('UID:', uid);
    // console.log('User:', user.uid);
    // console.log('Error:', error);

    // console.log('Props:' + JSON.stringify(user));

    return (
      <FullViewContainer>
        <KeyboardAvoidingView
          style={{width: '100%'}}
          behavior="padding"
        >
          <View style={styles.inputContainer}>
            <Icon
              name='envelope'
              type='simple-line-icon'
              color='#fff'
              iconStyle={[styles.icon, styles.mailIcon]}
            />
            <TextInput
              style={styles.textInput}
              placeholder={"Email Address"}
              placeholderTextColor="#c8c8c8"
              onChangeText={text => this.setState({email: text})}
              value={this.state.email}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name='lock'
              type='font-awesome'
              color='#fff'
              iconStyle={[styles.icon, styles.passwordIcon]}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#c8c8c8"
              onChangeText={text => this.setState({password: text})}
              secureTextEntry={true}
              value={this.state.password}
              underlineColorAndroid="transparent"
            />
          </View>

          <LoginButton
            type="E-mail"
            onPress={() => this.props.loginWithEmailByDispatch(this.state.email, this.state.password, navigation)}
          />

          <Text style={styles.noticeText} onPress={this._moveToSignUp}>Don't have an account? Sign up</Text>

        </KeyboardAvoidingView>
      </FullViewContainer>
    );
  }
}

export const LoginScreen = Login;
