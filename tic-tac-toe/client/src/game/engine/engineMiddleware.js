import {
    getPlayer1Ready, getPlayer2Ready,
} from '../../settings/modules/selectors';
import { isGameStarted } from './selectors';
import { beginGame } from './action.creators';

const engineMiddleware = ({ getState }) => next => (action) => {
    const result = next(action);
    const state = getState();
    if (getPlayer1Ready(state) && getPlayer2Ready(state) && !isGameStarted(state)) {
        next(beginGame());
    }
    return result;
};

export default engineMiddleware;
