import {
  SYSTEM_GET_SNAPSHOT,
  SYSTEM_GET_FEEDS,
  SYSTEM_FILTER_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from './feed-type';

const initialState = {
  snapshot: {},
  feeds: [],
  filteredFeeds: [],
  categories: {},
  hasGetSnapshot: false,
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
        hasGetSnapshot: false,
        isPendingPullRefresh: true,
      };
    case SYSTEM_GET_SNAPSHOT.SUCCESS:
      return {
        ...state,
        snapshot: action.payload,
        hasGetSnapshot: true,
        hasFeedsInSnapshot: action.hasFeedsInSnapshot,
        categories: action.payload.categories,
        isPendingPullRefresh: true,
      };
    case SYSTEM_GET_SNAPSHOT.ERROR:
      return {
        ...state,
        hasGetSnapshot: false,
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
        isPendingPullRefresh: true,
      };
    case SYSTEM_GET_FEEDS.ERROR:
      return {
        ...state,
        isPendingPullRefresh: false,
        error: action.error,
      };
    case SYSTEM_FILTER_FEEDS.PENDING:
      return {
        ...state,
        filteredFeeds: [],
        isPendingPullRefresh: true,
      };
    case SYSTEM_FILTER_FEEDS.SUCCESS:
      return {
        ...state,
        filteredFeeds: action.payload,
        isPendingPullRefresh: false,
      };
    case SYSTEM_FILTER_FEEDS.ERROR:
      return {
        ...state,
        isPendingPullRefresh: false,
        error: action.error,
      };
    case USER_PULL_REFRESH.PENDING:
      return {
        ...state,
        filteredFeeds: [],
        isPendingPullRefresh: true,
      };
    case USER_PULL_REFRESH.SUCCESS:
      return {
        ...state,
        feeds: action.payload,
        isPendingPullRefresh: true,
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
