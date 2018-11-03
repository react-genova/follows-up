import {
    getPlayer1Ready, getPlayer2Ready, getPlayer1Symbol,
} from '../../settings/modules/selectors';
import { isGameStarted, isGameIdle } from './selectors';
import { beginGame, endGame } from './action.creators';
import { getBoardValues } from '../../board/modules/selectors';
import getGameResults from './engine.utils';
import { DRAW, PLAYER_1_WON, PLAYER_2_WON } from './types/game.results.constants';

const engineMiddleware = ({ getState, dispatch }) => next => (action) => {
    const resultAction = next(action);
    const state = getState();
    if (isGameStarted(state)) {
        const result = getGameResults(getBoardValues(state));
        if (result.ended) {
            if (result.draw) {
                dispatch(endGame(DRAW));
            } else if (result.winner === getPlayer1Symbol(state)) {
                dispatch(endGame(PLAYER_1_WON));
            } else {
                dispatch(endGame(PLAYER_2_WON));
            }
        }
    } else if (isGameIdle(state) && getPlayer1Ready(state) && getPlayer2Ready(state)) {
        dispatch(beginGame());
    }
    return resultAction;
};

export default engineMiddleware;
