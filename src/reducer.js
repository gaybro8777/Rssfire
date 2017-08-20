import { combineReducers } from 'redux';

import { authReducer } from './auth/index';
// import { something } from './folder';

// Can be named Reducer whatever you want
// Name: reducer
const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
