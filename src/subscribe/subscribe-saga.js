import { delay } from 'redux-saga';
import { select, call, put, take, takeEvery, all } from 'redux-saga/effects';
import firebase from '../config/firebase';
import {
  USER_TOUCH_ADD_FEED
} from './subscribe-type';

function* pushFeedToFirebase(action) {
  try {
    const feedObj = {
      title: action.title,
      url: action.url,
      subscribed: Date.now(),
    }

    const result = yield pushFeedToFirebaseExec(action.uid, feedObj);

    yield put({ type: USER_TOUCH_ADD_FEED.SUCCESS });
  } catch(error) {
    yield put({ type: USER_TOUCH_ADD_FEED.ERROR, error: error.message });
  }
}


// Exec
function* pushFeedToFirebaseExec(uid, obj) {
  const param = [uid, obj];
  return yield call(firebase.pushFeedRecord, ...param);
}

export const subscribeSaga = [
  takeEvery(USER_TOUCH_ADD_FEED.PENDING, pushFeedToFirebase)
];
