import { initialEngineState } from './types/engine.types';
import { BEGIN_GAME, END_GAME, EXIT_GAME } from './action.definitions';
import {
    DRAW, PLAYER_1_WON, PLAYER_2_WON, NONE,
} from './types/game.results.constants';
import { STARTED, WAITING_FOR_START } from './types/game.status.constants';

const getFieldFromResult = gameresult => ({
    [DRAW]: 'draws',
    [PLAYER_1_WON]: 'player1victories',
    [PLAYER_2_WON]: 'player2victories',
}[gameresult]);

const engine = (state = initialEngineState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
    case BEGIN_GAME: return state.withMutations((mutable) => {
        mutable.set('status', STARTED);
        mutable.set('result', NONE);
    });
    case END_GAME: return state.withMutations((mutable) => {
        const { gameresult } = payload;
        mutable.updateIn(['history', getFieldFromResult(gameresult)], value => value + 1);
        mutable.set('status', WAITING_FOR_START);
        mutable.set('result', gameresult);
    });
    case EXIT_GAME: return initialEngineState;
    default: return state;
    }
};

export default engine;
