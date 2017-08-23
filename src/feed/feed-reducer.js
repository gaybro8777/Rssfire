import {
  SYSTEM_GET_SNAPSHOT,
  SYSTEM_GET_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from './feed-type';

const initialState = {
  snapshot: {},
  feeds: {},
  categories: {},
  hasFeedsInSnapshot: false,
  isPendingGetSnapshot: false,
  isPendingFetchFeeds: false,
  error: '',
};

export const feedReducer = (state = initialState, action = {}) => {
  console.log('Exec feed Reducer:' + action.type);
  switch(action.type) {
    case SYSTEM_GET_SNAPSHOT.PENDING:
      return {
        ...state,
        isPendingGetSnapshot: true,
      };
    case SYSTEM_GET_SNAPSHOT.SUCCESS:
      return {
        ...state,
        snapshot: action.payload,
        hasFeedsInSnapshot: action.hasFeedsInSnapshot,
        categories: action.payload.categories,
        isPendingGetSnapshot: false,
      };
    case SYSTEM_GET_SNAPSHOT.ERROR:
      return {
        ...state,
        isPendingGetSnapshot: false,
        error: action.error,
      };
    case SYSTEM_GET_FEEDS.PENDING:
      return {
        ...state,
        isPendingFetchFeeds: true,
      };
    case SYSTEM_GET_FEEDS.SUCCESS:
      return {
        ...state,
        feeds: action.payload,
        isPendingFetchFeeds: false,
      };
    case SYSTEM_GET_FEEDS.ERROR:
      return {
        ...state,
        isPendingFetchFeeds: false,
        error: action.error,
      };
    default:
      return state;
  }
};
