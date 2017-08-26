import React, { Component } from 'react';
import { KeyboardAvoidingView, Image, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      url: null,
      category: null,
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        // style={}
        behavior="padding"
      >
        <TextInput
          // style={}
          placeholder="Feed Title"
          placeholderTextColor="#c8c8c8"
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <TextInput
          // style={}
          placeholder="Feed URL"
          placeholderTextColor="#c8c8c8"
          onChangeText={url => this.setState({ url })}
          value={this.state.url}
        />
        <TextInput
          // style={}
          placeholder="Feed Category"
          placeholderTextColor="#c8c8c8"
          onChangeText={category => this.setState({ category })}
          value={this.state.category}
        />
        <Button
          // buttonStyle={}
          // textStyle={}
          containerViewStyle={{ width: '85%' }}
          title="ADD FEED"
          onPress={() => this.props.navigation.navigate('Feed')}
        />
      </KeyboardAvoidingView>
    );
  }
}

export const SubscribeScreen = Subscribe;
