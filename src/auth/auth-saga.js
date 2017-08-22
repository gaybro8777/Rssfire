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
import {
  USER_SIGNUP_GOOGLE,
  USER_SIGNUP_EMAIL,
  USER_LOGIN_EMAIL,
  USER_LOGOUT
} from './auth-type';

firebase.init();

function* signUpWithGoogle() {
  try {
    const payload = yield signUpWithGoogleExec();
    yield put({ type: USER_SIGNUP_GOOGLE.SUCCESS, payload });
  } catch(error) {
    yield put({ type: USER_SIGNUP_GOOGLE.ERROR, error: error.message });
  }
}

function* signUpWithEmail(action) {
  try {
    const payload = yield signUpWithEmailExec(action);
    yield put({ type: USER_SIGNUP_EMAIL.SUCCESS, payload });
  } catch(error) {
    yield put({ type: USER_SIGNUP_EMAIL.ERROR, error: error.message });
  }
}

function* loginWithEmail(action) {
  try {
    const payload = yield loginWithEmailExec(action);
    yield put({ type: USER_LOGIN_EMAIL.SUCCESS, payload });
  } catch(error) {
    yield put({ type: USER_LOGIN_EMAIL.ERROR, error: error.message });
  }
}

function* logout(action) {
  console.log('Saga: sign out');
  try {
    yield logoutExec();
    yield put({ type: USER_LOGOUT.SUCCESS });
  } catch(error) {
    yield put({ type: USER_LOGOUT.ERROR, error: error.message });
  }
}

// Exec
function* signUpWithEmailExec(action) {
  const param = [action.email, action.password];
  return yield call(firebase.signUpWithEmail, ...param);
}

function* signUpWithGoogleExec() {
  return yield call(firebase.signInWithGooglePopup);
}

function* loginWithEmailExec(action) {
  const param = [action.email, action.password];
  return yield call(firebase.loginWithEmail, ...param);
}

function* logoutExec() {
  return yield call(firebase.logout);
}

export const authSaga = [
  takeEvery(USER_SIGNUP_GOOGLE.PENDING, signUpWithGoogle),
  takeEvery(USER_SIGNUP_EMAIL.PENDING, signUpWithEmail),
  takeEvery(USER_LOGIN_EMAIL.PENDING, loginWithEmail),
  takeEvery(USER_LOGOUT.PENDING, logout)
];
