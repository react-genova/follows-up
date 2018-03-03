import { combineReducers, createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

import epicMiddleware from '../modules/_epics';
import chat from '../modules/chat';
import messages from '../modules/messages'

const reducers = combineReducers({ chat, messages });

const store = createStore(
    reducers,
    applyMiddleware(
        epicMiddleware,
        loggerMiddleware
    )
);

export default store;