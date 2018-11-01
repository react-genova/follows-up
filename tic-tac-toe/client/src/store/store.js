import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { createLogger } from 'redux-logger';
import { setRootFactory, toJS as stateTransformer } from './store.utils';
// game
import machinebot from '../game/machinebot/machinebotMiddleware';
import game from '../game/engine/engine';
import { setEngineRoot } from '../game/engine/selectors';
// settings
import settings from '../settings/modules/settings';
import { setSettingsRoot } from '../settings/modules/selectors';
// board
import board from '../board/modules/board';
import { setBoardRoot } from '../board/modules/selectors';

setSettingsRoot(setRootFactory('settings'));
setBoardRoot(setRootFactory('board'));
setEngineRoot(setRootFactory('game'));

const reducers = combineReducers({ settings, game, board });

const store = createStore(
    reducers,
    applyMiddleware(
        machinebot,
        createLogger({ stateTransformer }),
    ),
);

export default store;
