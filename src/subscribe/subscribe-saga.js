import { delay } from 'redux-saga';
import { select, call, put, take, takeEvery, all } from 'redux-saga/effects';
import firebase from '../config/firebase';
import {
  USER_TOUCH_ADD_FEED
} from './subscribe-type';

function* setFeedToFirebase(action) {
  try {
    yield put({ type: USER_TOUCH_ADD_FEED.SUCCESS });
  } catch(error) {
    yield put({ type: USER_TOUCH_ADD_FEED.ERROR, error: error.message });
  }
}


// Exec
function* setFeedToFirebaseExec(action) {
  // return yield call(firebase.getSnapshot, action.userId);
}


export const subscribeSaga = [
  takeEvery(USER_TOUCH_ADD_FEED.PENDING, setFeedToFirebase)
];
