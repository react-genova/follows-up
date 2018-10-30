import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { logger } from 'redux-logger';
import machinebot from '../game/machinebot/machinebotMiddleware';
import settings from '../settings/modules/settings';
import { setSettingsRoot } from '../settings/modules/selectors';
import board from '../board/modules/board';
import { setBoardRoot } from '../board/modules/selectors';
import setRootFactory from './store.utils';

setSettingsRoot(setRootFactory('settings'));
setBoardRoot(setRootFactory('board'));

const reducers = combineReducers({ settings, board });

const store = createStore(reducers, applyMiddleware(machinebot, logger));

export default store;
