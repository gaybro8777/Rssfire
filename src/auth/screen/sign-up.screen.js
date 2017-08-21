import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import { resetNavigation } from '../../utils/index';
import { SignUpButton, FullViewContainer } from '../../components/index';

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
});

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  funcTest() {
    console.log('exec funcTest()');
  }

  // Debug
  moveToLogin() {
    const { navigation } = this.props;
    navigation.navigate('Login');
  }

  props: {
    navigation: Object,
    user: Object,
    isPendingSignUpEmail: Boolean,
    error: String,
  };

  componentWillMount() {
    console.log('Exec componentWillMount');
  }

  componentDidMount() {
    console.log('Exec componentDidMount');
  }

  render() {
    const {
      user,
      isPendingSignUpEmail,
      error,
    } = this.props;

    console.log('isPendingSignUpEmail:' + isPendingSignUpEmail);
    console.log('error:' + error);

    console.log('User:' + JSON.stringify(user));

    // console.log('Props:' + JSON.stringify(this.props));

    return (
      <FullViewContainer>
        <KeyboardAvoidingView
          style={{width: '100%'}}
          behavior="padding"
        >
          <SignUpButton
            type="Facebook"
            onPress={this.props.testMethod}
          />
          <SignUpButton
            type="Twitter"
            onPress={this.funcTest}
          />
          <SignUpButton
            type="Google"
            onPress={this.funcTest}
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
          <SignUpButton
            type="E-mail"
            onPress={() => this.props.signUpWithEmailByDispatch(this.state.email, this.state.password)}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            onPress={() => this.moveToLogin()}
            fontSize={18}
            title="Already have an account? Login"
          />
        </KeyboardAvoidingView>
      </FullViewContainer>
    );
  }
}

export const SignUpScreen = SignUp;
