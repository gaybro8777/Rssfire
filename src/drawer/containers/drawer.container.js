import React from 'react';
import { connect } from 'react-redux';

// import view from screen directory
import { DrawerScreen } from '../screen/drawer.screen';

// set state from reducer
const mapStateToProps = state => ({
  snapshot: state.feed.snapshot,
});

export const DrawerContainer = connect(mapStateToProps, null)(DrawerScreen);
