import { delay } from 'redux-saga';
import { call, put, take, takeEvery, all } from 'redux-saga/effects';
import firebase from '../config/firebase';
import {
  SYSTEM_GET_SNAPSHOT,
  SYSTEM_GET_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from './feed-type';

function* getSnapshot(action) {
  try {
    const payload = yield getSnapshotExec(action);
    if(payload) {
      // console.log('Saga feeds:', payload.val().feeds);
      // console.log('Saga cats:', payload.val().categories);

      const hasFeedsInSnapshot = payload.hasChild('feeds');

      // Success get database from firebase
      yield put({ type: SYSTEM_GET_SNAPSHOT.SUCCESS, payload: payload.val(), hasFeedsInSnapshot });

      // then, call to divid feeds and categories
    } else {
      yield put({ type: SYSTEM_GET_SNAPSHOT.ERROR, error: 'There\'s no data.' });
    }
  } catch(error) {
    yield put({ type: SYSTEM_GET_SNAPSHOT.ERROR, error: error.message });
  }
}

// Exec
function* getSnapshotExec(action) {
  return yield call(firebase.getSnapshot, action.userId);
}

export const feedSaga = [
  takeEvery(SYSTEM_GET_SNAPSHOT.PENDING, getSnapshot)
];
