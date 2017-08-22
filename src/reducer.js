import { combineReducers } from 'redux';

import { authReducer } from './auth/index';
import { feedReducer } from './feed/index';

// Can be named Reducer whatever you want
// Name: reducer
const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer
});

export default rootReducer;
