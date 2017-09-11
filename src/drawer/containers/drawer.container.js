import React from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { DrawerScreen } from '../screen/drawer.screen';
import { USER_TOUCH_LOGOUT, USER_TOUCH_FEED } from '../drawer-type';

// set state from reducer
const mapStateToProps = state => ({
  snapshot: state.feed.snapshot,
  isPendingLogout: state.drawer.isPendingLogout,
});

// set dispatch to saga
const mapDispatchToProps = dispatch => ({
  tryLogoutByDispatch: navigation => {
    dispatch({
      type: USER_TOUCH_LOGOUT.PENDING,
      navigation
    })
  },
  getFilteredFeedByDispatch: (navigation, url) => {
    dispatch({
      type: USER_TOUCH_FEED.PENDING,
      navigation,
      url
    })
  },
});

export const DrawerContainer = connect(mapStateToProps, mapDispatchToProps)(DrawerScreen);
