import { combineReducers } from 'redux';

import { authReducer } from './auth/index';
// import { something } from './folder';

const rootReducer = combineReducers({
  authReducer
});

export default rootReducer;
