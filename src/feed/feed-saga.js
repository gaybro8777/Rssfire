import { delay } from 'redux-saga';
import { call, put, take, takeEvery, all } from 'redux-saga/effects';
import firebase from '../config/firebase';
import {
  SYSTEM_GET_DATABASE,
  SYSTEM_GET_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from './feed-type';

function* getDatabase() {
  try {
    const payload = yield getDatabaseExec();
    firebase.user = payload;
    yield put({ type: SYSTEM_GET_DATABASE.SUCCESS, payload });
  } catch(error) {
    yield put({ type: SYSTEM_GET_DATABASE.ERROR, error: error.message });
  }
}


// Exec
function* getDatabaseExec(action) {
  return yield call(firebase.signUpWithEmail);
}

export const feedSaga = [
  takeEvery(SYSTEM_GET_DATABASE.PENDING, getDatabase)
];
