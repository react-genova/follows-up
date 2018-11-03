import { initialBoardState } from './types/board.types';
import { ADD_BOARD_MOVE } from './action.definitions';
import { BEGIN_GAME } from '../../game/modules/engine/action.definitions';

const board = (state = initialBoardState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
    case BEGIN_GAME:
        return initialBoardState;
    case ADD_BOARD_MOVE:
        return state.set('values', state.get('values').set(payload.index, payload.sign));
    default:
        return state;
    }
};

export default board;
