// At first, all actions through saga

// select - get state

// take - wait for action(dispatch)
// put - do action
// call - wait for api like getting data from internet

// fork - to start another task
// join - wait for another task which is done

// name rule

// function* name(){...}
// function* watchName(){...}

import { delay } from 'redux-saga';
import { call, put, take, takeEvery, all } from 'redux-saga/effects';
import firebase from '../config/firebase';
import { USER_TEST, USER_SIGNUP_EMAIL } from './auth-type';

firebase.init();

function* signUpWithEmail(action) {
  try {
    const payload = yield signUpWithEmailExec(action);
    yield put({ type: USER_SIGNUP_EMAIL.SUCCESS, payload });
  } catch(error) {
    yield put({ type: USER_SIGNUP_EMAIL.ERROR, error: error.message });
  }
}

function* signUpWithEmailExec(action) {
  const param = [action.email, action.password];
  return yield call(firebase.signUpWithEmail, ...param);
}

export const authSaga = [
  takeEvery(USER_SIGNUP_EMAIL.PENDING, signUpWithEmail)
];
