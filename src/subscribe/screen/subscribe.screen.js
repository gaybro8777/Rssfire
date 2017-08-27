import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { colors } from '../../utils/index';

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
    color: '#fff',
  },
  buttonStyle: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: colors.accentColor,
  },
});

class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      url: null,
      category: null,
    };
  }

  props: {
    navigation: Object,
    isPendingWriteFirebase: Boolean,
    error: String,
    setFeedByDispatch: Function,
  };

  render() {
    const {
      navigation,
      isPendingWriteFirebase,
      error,
    } = this.props;

    return (
      <KeyboardAvoidingView
        style={{width: '100%', height: '100%', backgroundColor: '#003d57'}}
        behavior="padding"
      >
        <TextInput
          style={styles.textInput}
          placeholder="Feed Title"
          placeholderTextColor="#c8c8c8"
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Feed URL"
          placeholderTextColor="#c8c8c8"
          onChangeText={url => this.setState({ url })}
          value={this.state.url}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Feed Category"
          placeholderTextColor="#c8c8c8"
          onChangeText={category => this.setState({ category })}
          value={this.state.category}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          // textStyle={}
          containerViewStyle={{ width: '90%' }}
          title="ADD FEED"
          onPress={
            () => this.props.setFeedByDispatch(this.state.title, this.state.url, this.state.category)
          }
        />
      </KeyboardAvoidingView>
    );
  }
}

export const SubscribeScreen = Subscribe;
