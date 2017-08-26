// return state

// import type
import {
  SYSTEM_AUTH_USER,
  USER_SIGNUP_GOOGLE,
  USER_SIGNUP_EMAIL,
  USER_LOGIN_EMAIL,
  USER_LOGOUT
} from './auth-type';

const initialState = {
  uid: '',
  user: {},
  isAuthenticated: false,
  isPendingSignUp: false,
  isPendingLogin: false,
  isPendingLogout: false,
  error: '',
};

export const authReducer = (state = initialState, action = {}) => {
  console.log('Exec auth Reducer:' + action.type);
  switch(action.type) {
    case SYSTEM_AUTH_USER.PENDING:

    case SYSTEM_AUTH_USER.SUCCESS:
      return {
        ...state,
        uid: action.payload,
        isAuthenticated: true,
      };
    case SYSTEM_AUTH_USER.ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error,
      };
    case USER_SIGNUP_GOOGLE.PENDING:
      return {
        ...state,
        isPendingSignUp: true,
      };
    case USER_SIGNUP_GOOGLE.SUCCESS:
      return {
        ...state,
        user: action.payload,
        isPendingSignUp: false,
      };
    case USER_SIGNUP_GOOGLE.ERROR:
      return {
        ...state,
        isPendingSignUp: false,
        error: action.error,
      };
    case USER_SIGNUP_EMAIL.PENDING:
      return {
        ...state,
        isPendingSignUp: true,
      };
    case USER_SIGNUP_EMAIL.SUCCESS:
      return {
        ...state,
        user: action.payload,
        uid: action.uid,
        isPendingSignUp: false,
      };
    case USER_SIGNUP_EMAIL.ERROR:
      return {
        ...state,
        isPendingSignUp: false,
        error: action.error,
      };
    case USER_LOGIN_EMAIL.PENDING:
      return {
        ...state,
        isPendingLogin: true,
      };
    case USER_LOGIN_EMAIL.SUCCESS:
      return {
        ...state,
        user: action.payload,
        uid: action.uid,
        isPendingLogin: false,
      };
    case USER_LOGIN_EMAIL.ERROR:
      return {
        ...state,
        isPendingLogin: false,
        uid: '',
        error: action.error,
      };
    case USER_LOGOUT.PENDING:
      return {
        ...state,
        isPendingLogout: true,
      };
    case USER_LOGOUT.SUCCESS:
      return {
        ...state,
        user: {},
        isPendingLogout: false,
      };
    case USER_LOGOUT.ERROR:
      return {
        ...state,
        isPendingLogout: false,
        error: action.error,
      };
    default:
      return state;
  }
};
