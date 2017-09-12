import { AsyncStorage } from 'react-native';
import { call, put, takeEvery } from 'redux-saga/effects';
import firebase from '../config/firebase';
import { resetNavigation } from '../utils/index';
import { USER_TOUCH_LOGOUT, USER_TOUCH_FEED } from './drawer-type';
import { SYSTEM_FILTER_FEEDS } from '../feed/index';

function* tryLogout(action) {
  try {
    const payload = yield tryLogoutExec();
    const uid = yield removeUIDExec();
    yield put({ type: USER_TOUCH_LOGOUT.SUCCESS });
    resetNavigation('Splash', action.navigation);
  } catch(error) {
    yield put({ type: USER_TOUCH_LOGOUT.ERROR, error: error.message });
  }
}

function* callFilterFeed(action) {
  try {
    yield put({ type: USER_TOUCH_FEED.SUCCESS, payload: action.url });
    resetNavigation('Home', action.navigation);
  } catch(error) {
    yield put({ type: USER_TOUCH_FEED.ERROR, error: error.message });
  }
}

// Exec
function* tryLogoutExec() {
  return yield call(firebase.logout);
}

function* removeUIDExec() {
  return yield AsyncStorage.removeItem('UID');
}

export const drawerSaga = [
  takeEvery(USER_TOUCH_LOGOUT.PENDING, tryLogout),
  takeEvery(USER_TOUCH_FEED.PENDING, callFilterFeed)
];
