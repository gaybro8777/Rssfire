import { USER_TOUCH_LOGOUT } from './drawer-type';

const initialState = {
  isPendingLogout: false,
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
    default:
      return state;
  }
};
