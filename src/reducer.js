import { combineReducers } from 'redux';

import { authReducer } from './auth/index';
import { feedReducer } from './feed/index';
import { subscribeReducer } from './subscribe/index';

// Can be named Reducer whatever you want
// Name: reducer
const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
  subscribe: subscribeReducer,
});

export default rootReducer;
