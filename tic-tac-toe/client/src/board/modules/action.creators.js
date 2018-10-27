import { ADD_BOARD_MOVE } from './action.definitions';

export const addBoardMove = (index, sign) => ({
    type: ADD_BOARD_MOVE,
    payload: {
        index,
        sign,
    },
});