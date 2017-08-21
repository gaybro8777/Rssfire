import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import { resetNavigation } from '../../utils/index';
import { SignInButton, FullViewContainer } from '../../components/index';

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

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      email: '',
      password: ''
    };
  }

  funcTest() {
    console.log('exec funcTest()');
  }

  props: {
    navigation: Object,
    isPendingTest: Boolean,
  };

  componentWillMount() {
    console.log('Exec componentWillMount');
    this.props.testMethod();
  }

  componentDidMount() {
    console.log('Exec componentDidMount');
  }

  render() {
    const {
      isPendingTest,
    } = this.props;

    // console.log('isPendingTest:' + isPendingTest);

    // console.log('Props:' + JSON.stringify(this.props));

    return (
      <FullViewContainer>
        <KeyboardAvoidingView
          style={{width: '100%'}}
          behavior="padding"
        >
          <SignInButton
            type="Facebook"
            onPress={this.props.testMethod}
          />
          <SignInButton
            type="Twitter"
            onPress={this.funcTest}
          />
          <SignInButton
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
          <SignInButton
            type="E-mail"
            onPress={this.props.testMethod}
          />
        </KeyboardAvoidingView>
      </FullViewContainer>
    );
  }
}

export const SignInScreen = SignIn;
