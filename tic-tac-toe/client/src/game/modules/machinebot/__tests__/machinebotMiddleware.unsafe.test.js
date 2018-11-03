import { asyncDispatch, makeARandomMove, makeCallback } from '../machinebotMiddleware.unsafe';
import { SIGN_NONE, SIGN_O, SIGN_X } from '../../../../board/modules/types/signs.constants';

jest.useFakeTimers();

describe('Machine bot middleware unsafe utils', () => {
    const val = value => ({ value, valid: SIGN_NONE !== value });
    it('creates a valid timer callback', () => {
        const dispatch = jest.fn();
        const action = 'fake action';
        makeCallback(dispatch, action)();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenLastCalledWith(action);
    });

    it('has to invoke an async dispatch', () => {
        asyncDispatch();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });

    it('returns a valid move when allowed (100 tries)', () => {
        const VALUES = [
            SIGN_NONE, SIGN_O, SIGN_X, SIGN_NONE, SIGN_O, SIGN_X, SIGN_NONE, SIGN_O, SIGN_X,
        ].map(val);
        const ALLOWED_MOVES = [0, 3, 6];
        for (let i = 0; i < 100; i += 1) {
            expect(ALLOWED_MOVES).toContain(makeARandomMove(VALUES));
        }
    });

    it('returns a invalid move when no more moves available', () => {
        const VALUES = [
            SIGN_X, SIGN_O, SIGN_X, SIGN_O, SIGN_O, SIGN_X, SIGN_X, SIGN_O, SIGN_X,
        ].map(val);
        expect(makeARandomMove(VALUES)).toBe(-1);
    });
});
