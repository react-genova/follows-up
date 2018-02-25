import { combineReducers, createStore } from 'redux';

import chat from '../modules/chat';

const reducers = combineReducers({ chat });

const store = createStore(reducers);

export default store;