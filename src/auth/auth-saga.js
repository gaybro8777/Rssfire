// At first, all actions through saga

// select - get state

// take - wait for action(dispatch)
// put - do action
// call - wait for api like getting data from internet

// fork - to start another task
// join - wait for another task which is done

import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

import { USER_TEST, USER_SIGNIN_EMAIL } from './auth-type';

function* hello() {
  yield delay(1000);
  console.log('Hello, Redux Saga');
  yield put ({
    type: USER_TEST.SUCCESS
  })
}

// takeEvery includes while loop
// so watcher should use takeEvery
export function* watchHello() {
  console.log('watching dispath from sigin container');
  yield takeEvery(USER_TEST.PENDING, hello);
}

// export const authSaga = function* authSaga() {
//   console.log('exec authSaga');
//   yield [
//     fork(watchHello)
//   ]
// }
