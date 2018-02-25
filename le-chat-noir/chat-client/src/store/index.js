import { combineReducers, createStore } from 'redux';

import chat from '../modules/chat';
import messages from '../modules/messages'

const reducers = combineReducers({ chat, messages });

const store = createStore(reducers);

export default store;