// function for async tasks
// like fetch data from internet

import { all } from 'redux-saga/effects';

import { authSaga } from './auth/index';
import { feedSaga } from './feed/index';

const rootSaga = function* rootSaga() {
  console.log('exec rootSaga');
  yield all([
    ...authSaga,
    ...feedSaga
  ]);
}

export default rootSaga;
