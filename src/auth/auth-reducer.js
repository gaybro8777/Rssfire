// return state

// import type
import { USER_TEST, USER_SIGNIN_EMAIL } from './auth-type';

const initialState = {
  isPendingTest: false,
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
    default:
      return state;
  }
};
