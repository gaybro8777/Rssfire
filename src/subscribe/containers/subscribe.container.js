import React, { Component } from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { SubscribeScreen } from '../screen/subscribe.screen';

import { USER_TOUCH_ADD_FEED } from '../subscribe-type';

// set state from reducer
const mapStateToProps = state => ({
  isPendingWriteFirebase: state.subscribe.isPendingWriteFirebase,
  error: '',
});

// TODO
// implement to dispatch action
const mapDispatchToProps = dispatch => ({
  getSnapshotByDispatch: userId => {
    dispatch({
      type: SYSTEM_GET_SNAPSHOT.PENDING,
      userId
    })
  },
});

export const SubscribeContainer = connect(mapStateToProps, mapDispatchToProps)(SubscribeScreen);
