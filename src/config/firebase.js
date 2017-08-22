import * as firebase from 'firebase';
import key from '../../key.json';

export default {
  _initialized: false,
  _user: null,

  init() {
    if(this._initialized) {
      console.log('Already initialized');
      return;
    }

    this._initialized = true;

    firebase.initializeApp({
      apiKey: `${key.API_KEY}`,
      authDomain: `${key.PROJECT_ID}.firebaseapp.com`,
      databaseURL: `https://${key.PROJECT_ID}.firebaseio.com`,
      storageBucket: `${key.PROJECT_ID}.appspot.com`,
    });
  },

  get user() {
    return this._user;
  },

  set user(user) {
    this._user = user;
  },

  get currentUser() {
    return firebase.auth().currentUser;
  },

  // LOGIN
  loginWithEmail(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  // LOGOUT
  logout() {
    console.log('Firebase: Logout');
    return firebase.auth().signOut();
  },

  // SIGN UP
  signUpWithEmail(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  signInWithGooglePopup() {
    // Can not use popup and get redirect

    // return firebase.auth().getRedirectResult();
    // console.log('Create Google Provider');
    // const provider = new firebase.auth.GoogleAuthProvider();
    // const user = firebase.auth().currentUser;

    // const authCredential = .authCredential('google.com');
    // console.log('user:', user.getIdToken());
    // console.log('user', user);
    // console.log(provider);
    // provider.addScope('email');
    // const credential = provider.credential();
    // console.log('Provider:', provider);
    // console.log('Credential:', credential);
    // return firebase.auth().signInWithPopup(provider);
  },
}
