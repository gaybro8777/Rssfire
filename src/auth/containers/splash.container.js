// Containers - divid states and actions
// Every dispatch through Redux saga
// saga divid API Call, action to reducer.

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { SplashScreen } from '../screen/splash.screen';

// import type
import { SYSTEM_AUTH_USER } from '../auth-type';

// set state from reducer
const mapStateToProps = state => ({
  uid: state.auth.uid,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

// set dispatch to saga
const mapDispatchToProps = dispatch => ({
  checkAuthUserByDispatch: navigation => {
    dispatch({
      type: SYSTEM_AUTH_USER.PENDING,
      navigation
    })
  },
});

export const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
