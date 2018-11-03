import { Record } from 'immutable';
import { NONE } from './game.results.constants';
import { IDLE } from './game.status.constants';

export const GameHistoryRecord = Record({
    draws: 0,
    player1victories: 0,
    player2victories: 0,
});

export const EngineRecord = Record({
    status: IDLE,
    result: NONE,
    history: new GameHistoryRecord(),
});

export const initialEngineState = new EngineRecord();
