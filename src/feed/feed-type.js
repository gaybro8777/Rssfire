import { createActionType } from '../utils/index';

export const SYSTEM_GET_SNAPSHOT = createActionType('SYSTEM_GET_SNAPSHOT');
export const SYSTEM_GET_FEEDS = createActionType('SYSTEM_GET_FEEDS');
export const USER_PULL_REFRESH = createActionType('USER_PULL_REFRESH');
export const USER_TOUCH_FEED_ITEM = createActionType('USER_TOUCH_FEED_ITEM');
