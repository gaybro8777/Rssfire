import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Root } from './router';

// TODO
// flow
// check Authentication from firebase
// then is not auth, go to sign in screen
// or is auth, go to home(Feed screen)

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}
