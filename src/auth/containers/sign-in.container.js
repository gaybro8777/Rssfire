// Containers - divid states and actions

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { SignInScreen } from '../screen/sign-in.screen';

// import type
import { USER_SIGNIN_EMAIL } from '../auth-type';

// set state and action

// LOGIN / LOGOUT
// SIGNIN / SIGNOUT

const mapStateToProps = state => ({
  count: '**'
});

const mapDispatchToProps = dispatch => ({
  sthFunctionFromUser: () => {
    dispatch({
      type: USER_SOME_ACTION
    })
  },
  sthFunctionFromSystem: () => {
    dispatch({
      type: SYSTEM_SOME_ACTION
    })
  },
  signInWithEmail: (email, password) => {
    // dispatch({
    //   type: USER_SIGNIN_EMAIL
    // })

    dispatch({
      type: USER_SIGNIN_EMAIL.SUCCESS,
      email,
      password
    })
  },
});

export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
