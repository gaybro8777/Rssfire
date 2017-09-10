import {
  SYSTEM_GET_SNAPSHOT,
  SYSTEM_GET_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from './feed-type';

const initialState = {
  snapshot: {},
  feeds: [],
  categories: {},
  hasFeedsInSnapshot: true,
  isPendingPullRefresh: false,
  error: '',
};

export const feedReducer = (state = initialState, action = {}) => {
  // Debug
  // console.log('Feed Reducer:', action.type);
  switch(action.type) {
    case SYSTEM_GET_SNAPSHOT.PENDING:
      return {
        ...state,
        feeds: [],
        isPendingPullRefresh: true,
      };
    case SYSTEM_GET_SNAPSHOT.SUCCESS:
      return {
        ...state,
        snapshot: action.payload,
        hasFeedsInSnapshot: action.hasFeedsInSnapshot,
        categories: action.payload.categories,
        isPendingPullRefresh: true,
      };
    case SYSTEM_GET_SNAPSHOT.ERROR:
      return {
        ...state,
        isPendingPullRefresh: false,
        error: action.error,
      };
    case SYSTEM_GET_FEEDS.PENDING:
      return {
        ...state,
        isPendingPullRefresh: true,
      };
    case SYSTEM_GET_FEEDS.SUCCESS:
      return {
        ...state,
        feeds: action.payload,
        isPendingPullRefresh: false,
      };
    case SYSTEM_GET_FEEDS.ERROR:
      return {
        ...state,
        isPendingPullRefresh: false,
        error: action.error,
      };
    case USER_PULL_REFRESH.PENDING:
      return {
        ...state,
        isPendingPullRefresh: true,
      };
    case USER_PULL_REFRESH.SUCCESS:
      return {
        ...state,
        feeds: action.payload,
        isPendingPullRefresh: false,
      };
    case USER_PULL_REFRESH.ERROR:
      return {
        ...state,
        isPendingPullRefresh: false,
        error: action.error,
      };
    default:
      return state;
  }
};
