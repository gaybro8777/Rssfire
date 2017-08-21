// Containers - divid states and actions
// Every dispatch through Redux saga
// saga divid API Call, action to reducer.

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { SignUpScreen } from '../screen/sign-up.screen';

// import type
import { USER_TEST, USER_SIGNIN_EMAIL } from '../auth-type';

// set state from reducer
const mapStateToProps = state => ({
  isPendingTest: state.auth.isPendingTest,
});

// set dispatch to saga
const mapDispatchToProps = dispatch => ({
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
  testMethod: () => {
    console.log('exec testMethod to saga');
    dispatch({
      type: USER_TEST.PENDING
    })
  }
});

export const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
