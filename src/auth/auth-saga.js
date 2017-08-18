// At first, all actions through saga

// take - wait for action(dispatch)
// put - do action
// call - wait for api like getting data from internet

// fork -

import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

import { USER_SIGNIN_EMAIL } from './auth-type';

const helloSaga = function* helloSaga() {
  console.log('Hello, Redux Saga');
}

// function* asyncIncrement() {
//   yield delay(1000);
//   console.log('exec increment');
//   yield put({
//     type: INCREMENT
//   })
// }

// takeEvery includes while loop
// so watcher should use takeEvery
// function* watchAsyncIncrement() {
//   console.log('watching async increment');
//   yield takeEvery(ASYNC_INCREMENT, asyncIncrement);
// }

export const authSaga = function* authSaga() {
  console.log('exec authSaga');
  yield all([
    helloSaga
  ]);
}
