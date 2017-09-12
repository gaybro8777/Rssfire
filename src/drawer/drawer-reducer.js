import { USER_TOUCH_LOGOUT, USER_TOUCH_FEED } from './drawer-type';

const initialState = {
  isPendingLogout: false,
  filter: null,
  error: '',
};

export const drawerReducer = (state = initialState, action = {}) => {
  // Debug
  // console.log('Drawer Reducer:', action.type);
  switch(action.type) {
    case USER_TOUCH_LOGOUT.PENDING:
      return {
        ...state,
        isPendingLogout: true,
      };
    case USER_TOUCH_LOGOUT.SUCCESS:
      return {
        ...state,
        isPendingLogout: false,
      };
    case USER_TOUCH_LOGOUT.ERROR:
      return {
        ...state,
        isPendingLogout: false,
        error: action.error,
      };
    case USER_TOUCH_FEED.PENDING:
      return state;
    case USER_TOUCH_FEED.SUCCESS:
      return {
        ...state,
        filter: action.payload,
      };
    case USER_TOUCH_FEED.ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
