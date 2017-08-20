// function for async tasks
// like fetch data from internet

import { all } from 'redux-saga/effects';

import { watchHello } from './auth/index';

const rootSaga = function* rootSaga() {
  console.log('exec rootSaga');
  yield all([
    watchHello()
  ]);
}

export default rootSaga;
