import { List } from 'immutable';
import * as matchers from 'jest-immutable-matchers';
import { initialBoardState } from '../types/board.types';
import { SIGN_NONE, SIGN_X } from '../types/signs.constants';
import { addBoardMove } from '../action.creators';
import board from '../board';

describe('Board reducer', () => {
    beforeEach(() => jest.addMatchers(matchers));

    it('initializes with a valid starting state', () => {
        const initialState = board();
        expect(initialState).toEqualImmutable(initialBoardState);
    });

    it('adds a move to the board', () => {
        const action = addBoardMove(4, SIGN_X);
        const stateBefore = board();
        const stateAfter = board(stateBefore, action);
        expect(stateAfter.get('values')).toEqualImmutable(List([
            SIGN_NONE, SIGN_NONE, SIGN_NONE,
            SIGN_NONE, SIGN_X, SIGN_NONE,
            SIGN_NONE, SIGN_NONE, SIGN_NONE,
        ]));
    });
});
