import { createSelector } from 'reselect';
import { IDLE } from './types/game.status.constants';

let getEngineRoot = state => state;

export const setEngineRoot = (getter) => {
    getEngineRoot = getter;
};

const getEngine = state => getEngineRoot(state);

const getEngineHistory = createSelector([getEngine], engine => engine.get('history'));

export const getGameStatus = createSelector([getEngine], engine => engine.get('status'));

export const getLastResult = createSelector([getEngine], engine => engine.get('result'));

export const getTotalDraws = createSelector([getEngineHistory], engine => engine.get('draws'));

export const getTotalPlayer1Victories = createSelector([getEngineHistory], engine => engine.get('player1victories'));

export const getTotalPlayer2Victories = createSelector([getEngineHistory], engine => engine.get('player2victories'));

export const isGameStarted = createSelector([getGameStatus], status => IDLE !== status);
