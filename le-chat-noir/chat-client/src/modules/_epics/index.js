import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';
import { webSockectConnectionEpic, webSockectMessageEpic } from './webSocketMessgeEpic';

const epics = combineEpics(webSockectConnectionEpic, webSockectMessageEpic);

export default createEpicMiddleware(epics);