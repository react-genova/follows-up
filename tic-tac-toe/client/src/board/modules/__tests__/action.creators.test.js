import { ADD_BOARD_MOVE } from '../action.definitions.js';
import { addBoardMove } from '../action.creators.js';
import { SIGN_O } from '../types/signs.constants';

describe('Board action creators', () => {
    it('creates a valid addBoardMove action', () => {
        const action = addBoardMove(3, SIGN_O);
        expect(action).toEqual({
            type: ADD_BOARD_MOVE,
            payload: {
                index: 3,
                sign: SIGN_O,
            },
        });
    });
});
