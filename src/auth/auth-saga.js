import { AsyncStorage } from 'react-native';
import { delay } from 'redux-saga';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import firebase from '../config/firebase';
import { resetNavigation } from '../utils/index';
import {
  SYSTEM_AUTH_USER,
  USER_SIGNUP_GOOGLE,
  USER_SIGNUP_EMAIL,
  USER_LOGIN_EMAIL,
  USER_LOGOUT
} from './auth-type';

firebase.init();

// For Debug
function* deleteUserIdFromStorage() {
  try {
    AsyncStorage.removeItem('UID');
    console.log('UID has been deleted.');
  } catch(e) {
    console.warn('Error:', e.message);
  }
}

function* getUserId(action) {
  try {
    // Debug
    // yield deleteUserIdFromStorage();
    const payload = yield getUserIdExec();

    yield delay(1500);

    if(payload !== null) {
      yield put({ type: SYSTEM_AUTH_USER.SUCCESS, payload });
      resetNavigation('Home', action.navigation);
    } else {
      yield put({ type: SYSTEM_AUTH_USER.ERROR, error: '' });
      resetNavigation('SignUp', action.navigation);
    }
  } catch(error) {
    yield put({ type: SYSTEM_AUTH_USER.ERROR, error: error.message });
    resetNavigation('SignUp', action.navigation);
  }
}

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
    firebase.user = payload;

    yield setUpInitRecordExec(firebase.user.uid);
    yield setUserIdToStorageExec(firebase.user.uid);
    yield put({ type: USER_SIGNUP_EMAIL.SUCCESS, payload, uid: firebase.user.uid });

    resetNavigation('Home', action.navigation);
  } catch(error) {
    yield put({ type: USER_SIGNUP_EMAIL.ERROR, error: error.message });
  }
}

function* loginWithEmail(action) {
  try {
    const payload = yield loginWithEmailExec(action);
    firebase.user = payload;
    yield setUserIdToStorageExec(firebase.user.uid);
    yield put({ type: USER_LOGIN_EMAIL.SUCCESS, payload, uid: firebase.user.uid });

    resetNavigation('Home', action.navigation);
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
function* getUserIdExec() {
  return yield AsyncStorage.getItem('UID');
}

function* setUserIdToStorageExec(userId) {
  return yield(AsyncStorage.setItem('UID', userId));
}

function* setUpInitRecordExec(userId) {
  return yield call(firebase.setDefaultRecord, userId);
}

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
  takeEvery(SYSTEM_AUTH_USER.PENDING, getUserId),
  takeEvery(USER_SIGNUP_GOOGLE.PENDING, signUpWithGoogle),
  takeEvery(USER_SIGNUP_EMAIL.PENDING, signUpWithEmail),
  takeEvery(USER_LOGIN_EMAIL.PENDING, loginWithEmail),
  takeEvery(USER_LOGOUT.PENDING, logout)
];
