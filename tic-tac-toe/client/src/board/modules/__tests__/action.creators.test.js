import { addBoardMove } from '../action.creators';
import { SIGN_O } from '../types/signs.constants';

describe('Board action creators', () => {
    it('creates a valid addBoardMove action', () => {
        const action = addBoardMove(3, SIGN_O);
        expect(action).toEqual({
            type: 'ADD_BOARD_MOVE@board',
            payload: {
                index: 3,
                sign: SIGN_O,
            },
        });
    });
});
