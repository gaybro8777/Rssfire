import { USER_TOUCH_ADD_FEED } from '../subscribe-type';

const initialState = {
  isPendingWriteFirebase: false,
  error: '',
};

export const subscribeReducer = (state = initialState, action = {}) => {
  console.log('Exec subscribe Reducer:' + action.type);
  switch(action.type) {
    case USER_TOUCH_ADD_FEED.PENDING:
      return {
        ...state,
        isPendingWriteFirebase: true,
      };
    case USER_TOUCH_ADD_FEED.SUCCESS:
      return {
        ...state,
        isPendingWriteFirebase: false,
      };
    case USER_TOUCH_ADD_FEED.ERROR:
      return {
        ...state,
        isPendingWriteFirebase: false,
        error: action.error,
      };
    default:
      return state;
  }
};
