import { createActionType } from '../utils/index';

export const SYSTEM_AUTH_USER = createActionType('SYSTEM_AUTH_USER');

export const USER_SIGNIN_EMAIL = createActionType('USER_SIGNIN_EMAIL');

export const USER_SIGNUP_FACEBOOK = createActionType('USER_SIGNUP_FACEBOOK');
export const USER_SIGNUP_TWITTER = createActionType('USER_SIGNUP_TWITTER');
export const USER_SIGNUP_GOOGLE = createActionType('USER_SIGNUP_GOOGLE');
export const USER_SIGNUP_EMAIL = createActionType('USER_SIGNUP_EMAIL');

export const USER_LOGIN_FACEBOOK = createActionType('USER_LOGIN_FACEBOOK');
export const USER_LOGIN_TWITTER = createActionType('USER_LOGIN_TWITTER');
export const USER_LOGIN_GOOGLE = createActionType('USER_LOGIN_GOOGLE');
export const USER_LOGIN_EMAIL = createActionType('USER_LOGIN_EMAIL');

export const USER_LOGOUT = createActionType('USER_LOGOUT');

export const SYSTEM_ERROR_CLEANUP = createActionType('SYSTEM_ERROR_CLEANUP');
export const USER_TOUCHED_ERROR_NOTICE = createActionType('USER_TOUCHED_ERROR_NOTICE');
