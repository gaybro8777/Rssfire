// return state

// import type
import { USER_TEST, USER_SIGNIN_EMAIL, USER_SIGNUP_EMAIL } from './auth-type';

const initialState = {
  user: {},
  isPendingSignUpEmail: false,
  error: '',
};

export const authReducer = (state = initialState, action = {}) => {
  console.log('Exec auth Reducer:' + action.type);
  switch(action.type) {
    case USER_SIGNUP_EMAIL.PENDING:
      return {
        ...state,
        isPendingSignUpEmail: true,
      };
    case USER_SIGNUP_EMAIL.SUCCESS:
      return {
        ...state,
        user: action.payload,
        isPendingSignUpEmail: false,
      };
    case USER_SIGNUP_EMAIL.ERROR:
      return {
        ...state,
        isPendingSignUpEmail: false,
        error: action.error,
      };
    default:
      return state;
  }
};
