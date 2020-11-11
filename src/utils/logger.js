/* eslint-disable no-console */

import axios from 'axios';
import { serializeError } from 'serialize-error';

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

const transformDataToMsg = arg => {
  if (arg instanceof Error) {
    // The error serialization returns empty object as the keys are not enumerable.
    // See https://stackoverflow.com/questions/18391212/is-it-not-possible-to-stringify-an-error-using-json-stringify
    return serializeError(arg);
  }
  return arg;
};

const logger = params => makeRequest(params);

/**
  This is monkey patching for console actions
  Each action (console.log, console.error, console.info, console.warn), when this happened,
  works as usual and made a call for remote server
*/
const initializeRemoteLogging = (callbackWithParams = () => ({})) => {
  const consoleLog = console.log;
  const consoleError = console.error;
  const consoleInfo = console.info;
  const consoleWarn = console.warn;

  console.log = (...args) => {
    try {
      consoleLog.apply(this, args);
      const params = callbackWithParams();

      args.forEach(arg => makeRequest({ params, level: 'log', message: transformDataToMsg(arg) }));
    } catch (e) {
      consoleError(e);
    }
  };

  console.error = (...args) => {
    try {
      consoleError.apply(this, args);
      const params = callbackWithParams();

      args.forEach(arg =>
        makeRequest({ params, level: 'error', message: transformDataToMsg(arg) }),
      );
    } catch (e) {
      consoleError(e);
    }
  };

  console.info = (...args) => {
    try {
      consoleInfo.apply(this, args);
      const params = callbackWithParams();

      args.forEach(arg => makeRequest({ params, level: 'info', message: transformDataToMsg(arg) }));
    } catch (e) {
      consoleError(e);
    }
  };

  console.warn = (...args) => {
    try {
      consoleWarn.apply(this, args);
      const params = callbackWithParams();

      args.forEach(arg => makeRequest({ params, level: 'warn', message: transformDataToMsg(arg) }));
    } catch (e) {
      consoleError(e);
    }
  };
};

export { initializeRemoteLogging, logger };
