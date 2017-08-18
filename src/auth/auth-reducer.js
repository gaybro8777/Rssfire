// return state

// import type
import { USER_SIGNIN_EMAIL } from './auth-type';

const initialState = {
  test: false,
};

export const authReducer = (state = initialState, action = {}) => {
  console.log('Exec auth Reducer');
  switch(action.type) {
    case USER_SIGNIN_EMAIL.SUCCESS:
      return {
        ...state,
        test: true,
      }
    default:
      return state;
  }
};
