import EventEmitter from 'events';
import { EVENT_TYPES } from './constants';
import { NOTICES_TYPES } from '../constants/notices';

const showNoticeEvent = new EventEmitter();

export const showNotice = (...args) => {
  showNoticeEvent.emit(EVENT_TYPES.notices.show, ...args);
};

export const subscribeOnShowNotice = callback => {
  const listener = (...args) => {
    callback(...args);
  };

  showNoticeEvent.on(EVENT_TYPES.notices.show, listener);

  return () => showNoticeEvent.removeListener(EVENT_TYPES.notices.show, listener);
};

export const showInfo = value => showNotice(NOTICES_TYPES.INFO, value);
export const showSuccess = value => showNotice(NOTICES_TYPES.SUCCESS, value);
export const showError = value => showNotice(NOTICES_TYPES.ERROR, value);
export const showWarning = value => showNotice(NOTICES_TYPES.WARNING, value);
