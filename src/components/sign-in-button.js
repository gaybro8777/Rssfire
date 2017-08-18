import React, { Component } from 'react';
import { Button } from 'react-native-elements';

export class SignInButton extends Component {
  constructor(props) {
    super(props);
  }

  props: {
    title: String,
    icon: Object,
    backgroundColor: String,
    borderRadius: Number,
    color: String
  }

  render() {
    return (
      <Button
        // raised
        // large
        // iconRight
        // icon={{name: 'cached'}}
        // buttonStyle={}
        backgroundColor={`${this.props.backgroundColor}`}
        borderRadius={`${this.props.backgroundColor}`}
        color={`${this.props.backgroundColor}`}
        // textStyle={}
        fontSize="18"
        underlayColor="transparent"
        title={`${this.props.title}`}
      />
    );
  }
}
