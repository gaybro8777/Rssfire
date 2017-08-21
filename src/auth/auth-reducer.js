// return state

// import type
import { USER_TEST, USER_SIGNIN_EMAIL, USER_SIGNUP_EMAIL } from './auth-type';

const initialState = {
  user = {},
  isPendingTest: false,
  isPendingSignUpEmail: false,
  error: '',
};

export const authReducer = (state = initialState, action = {}) => {
  console.log('Exec auth Reducer:' + action.type);
  switch(action.type) {
    case USER_TEST.PENDING:
      return {
        ...state,
        isPendingTest: true,
      };
    case USER_TEST.SUCCESS:
      return {
        ...state,
        isPendingTest: false,
      };
    case USER_TEST.ERROR:
      return {
        ...state,
        error: 'Something went wrong!',
        isPendingTest: false,
      };
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
        error: action.payload,
      };
    default:
      return state;
  }
};
