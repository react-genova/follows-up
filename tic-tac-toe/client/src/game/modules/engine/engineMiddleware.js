import {
    getPlayer1Ready, getPlayer2Ready, getPlayer1Symbol, getAutoplay,
} from '../../../settings/modules/selectors';
import { isGameStarted, isGameIdle } from './selectors';
import { beginGame, endGame } from './action.creators';
import { getBoardResults } from '../../../board/modules/selectors';
import { DRAW, PLAYER_1_WON, PLAYER_2_WON } from './types/game.results.constants';
import { asyncDispatch } from '../_common/utils.unsafe';

const engineMiddleware = ({ getState, dispatch }) => next => (action) => {
    const resultAction = next(action);
    const state = getState();
    if (isGameStarted(state)) {
        const result = getBoardResults(state);
        if (result.ended) {
            if (result.draw) {
                dispatch(endGame(DRAW));
            } else if (result.winner === getPlayer1Symbol(state)) {
                dispatch(endGame(PLAYER_1_WON));
            } else {
                dispatch(endGame(PLAYER_2_WON));
            }
            if (getAutoplay(state)) {
                asyncDispatch(dispatch, beginGame(), 1000);
            }
        }
    } else if (isGameIdle(state) && getPlayer1Ready(state) && getPlayer2Ready(state)) {
        dispatch(beginGame());
    }
    return resultAction;
};

export default engineMiddleware;
