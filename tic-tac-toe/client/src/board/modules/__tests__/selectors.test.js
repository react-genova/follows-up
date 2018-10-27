import { List } from 'immutable';
import { getBoardValues } from '../selectors';
import { BoardRecord } from '../types/board.types';
import { SIGN_NONE, SIGN_X } from '../types/signs.constants';

describe('Board selectors', () => {
    it('retrieves all empty values from just started game', () => {
        const EMPTY_STATE = new BoardRecord();
        expect(getBoardValues(EMPTY_STATE)).toEqual([
            SIGN_NONE, SIGN_NONE, SIGN_NONE,
            SIGN_NONE, SIGN_NONE, SIGN_NONE,
            SIGN_NONE, SIGN_NONE, SIGN_NONE,
        ]);
    });

    it('retrieves values from played game', () => {
        const STATE = new BoardRecord({
            values: List([
                SIGN_NONE, SIGN_NONE, SIGN_X,
                SIGN_NONE, SIGN_X, SIGN_NONE,
                SIGN_NONE, SIGN_NONE, SIGN_NONE,
            ]),
        });
        expect(getBoardValues(STATE)).toEqual([
            SIGN_NONE, SIGN_NONE, SIGN_X,
            SIGN_NONE, SIGN_X, SIGN_NONE,
            SIGN_NONE, SIGN_NONE, SIGN_NONE,
        ]);
    });
});
