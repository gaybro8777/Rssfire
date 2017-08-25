import { delay } from 'redux-saga';
import { select, call, put, take, takeEvery, all } from 'redux-saga/effects';
import firebase from '../config/firebase';
import { fetchHelper, xmlParser } from '../utils/index';
import {
  SYSTEM_GET_SNAPSHOT,
  SYSTEM_GET_FEEDS,
  USER_PULL_REFRESH,
  USER_TOUCH_FEED_ITEM
} from './feed-type';

function* getSnapshot(action) {
  console.log('Action', action);
  try {
    const payload = yield getSnapshotExec(action);
    if(payload) {
      // console.log('Saga feeds:', payload.val().feeds);
      // console.log('Saga cats:', payload.val().categories);

      const hasFeedsInSnapshot = payload.hasChild('feeds');

      // Success get database from firebase
      yield put({ type: SYSTEM_GET_SNAPSHOT.SUCCESS, payload: payload.val(), hasFeedsInSnapshot });

      if(hasFeedsInSnapshot) {
        // put get feed
        yield put({ type: SYSTEM_GET_FEEDS.PENDING, feeds: payload.val().feeds });
      }

    } else {
      yield put({ type: SYSTEM_GET_SNAPSHOT.ERROR, error: 'There\'s no data.' });
    }
  } catch(error) {
    yield put({ type: SYSTEM_GET_SNAPSHOT.ERROR, error: error.message });
  }
}

function* getFeed(action) {
  // console.log('Action:', action);
  // {type: "SYSTEM_GET_FEEDS_PENDING", feeds: {...}, @@redux-saga/SAGA_ACTION: true}

  const xmlRequest = yield call(getFeedExec, action.feeds);
  // console.log(xmlRequest);

  // [
  //   {payload: "..."},
  //   {payload: "..."},
  //   {error: "..."}
  // ]

  const result = yield all(
    xmlRequest.map(val => {
      if(val.payload) {
        return call(xmlParser, val.payload);
      } else {
        return null;
      }
    })
  );

  console.log('Result:', result);
  yield put({ type: SYSTEM_GET_FEEDS.SUCCESS, payload: result });

  // TODO
  // error handling
}

// Exec
function* getSnapshotExec(action) {
  return yield call(firebase.getSnapshot, action.userId);
}

function* getFeedExec(feeds) {
  return yield all(
    Object.keys(feeds).map(key => {
      let url = feeds[key]['url'];
       return call(fetchHelper, url);
    })
  );
}

export const feedSaga = [
  takeEvery(SYSTEM_GET_SNAPSHOT.PENDING, getSnapshot),
  takeEvery(SYSTEM_GET_FEEDS.PENDING, getFeed)
];
