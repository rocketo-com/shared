/* eslint-disable no-console */

import axios from 'axios';

// We decided to use hardcoded value for now, cause we have troubles with passed env variables to the _shared
const LOGSTASH_URL = 'https://felogs.rocketo.com';

const makeRequest = data =>
  axios.request({
    url: LOGSTASH_URL,
    method: 'POST',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Max-Age': 0,
    data,
  });

const logger = params => makeRequest(params);

/**
  This is monkey patching for console actions
  Each action (console.log, console.error, console.info, console.warn), when this happened,
  works as usual and made a call for remote server
*/
const initializeRemoteLogging = callbackWithParams => {
  const consoleLog = console.log;
  const consoleError = console.error;
  const consoleInfo = console.info;
  const consoleWarn = console.warn;

  console.log = (...args) => {
    try {
      consoleLog.apply(this, args);
      const params = callbackWithParams();

      args.forEach(arg => makeRequest({ ...params, level: 'log', message: arg }));
    } catch (e) {
      consoleError(e);
    }
  };

  console.error = (...args) => {
    try {
      consoleError.apply(this, args);
      const params = callbackWithParams();

      args.forEach(arg => makeRequest({ ...params, level: 'error', message: arg }));
    } catch (e) {
      consoleError(e);
    }
  };

  console.info = (...args) => {
    try {
      consoleInfo.apply(this, args);
      const params = callbackWithParams();

      args.forEach(arg => makeRequest({ ...params, level: 'info', message: arg }));
    } catch (e) {
      consoleError(e);
    }
  };

  console.warn = (...args) => {
    try {
      consoleWarn.apply(this, args);
      const params = callbackWithParams();

      args.forEach(arg => makeRequest({ ...params, level: 'warn', message: arg }));
    } catch (e) {
      consoleError(e);
    }
  };
};

export { initializeRemoteLogging, logger };
