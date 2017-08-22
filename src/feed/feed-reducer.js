import {
  SYSTEM_GET_DATABASE,
  SYSTEM_GET_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from './feed-type';

const initialState = {
  database: {},
  feeds: {},
  isPendingGetDatabase: false,
  isPendingFetchFeeds: false,
  error: '',
};

export const feedReducer = (state = initialState, action = {}) => {
  console.log('Exec feed Reducer:' + action.type);
  switch(action.type) {
    case SYSTEM_GET_DATABASE.PENDING:
      return {
        ...state,
        sPendingGetDatabase: true,
      };
    case SYSTEM_GET_DATABASE.SUCCESS:
      return {
        ...state,
        database: action.payload,
        sPendingGetDatabase: false,
      };
    case SYSTEM_GET_DATABASE.ERROR:
      return {
        ...state,
        sPendingGetDatabase: false,
        error: action.error,
      };
    default:
      return state;
  }
};
