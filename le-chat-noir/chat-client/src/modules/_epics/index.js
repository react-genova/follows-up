import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';
import webSockectMessageEpic from './webSocketMessgeEpic';

const epics = combineEpics(webSockectMessageEpic);

export default createEpicMiddleware(epics);