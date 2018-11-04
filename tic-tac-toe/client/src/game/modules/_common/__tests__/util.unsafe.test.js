import { asyncDispatch, makeCallback } from '../utils.unsafe';

jest.useFakeTimers();

describe('Machine bot middleware unsafe utils', () => {
    it('creates a valid timer callback', () => {
        const dispatch = jest.fn();
        const action = 'fake action';
        makeCallback(dispatch, action)();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenLastCalledWith(action);
    });

    it('has to invoke an async dispatch', () => {
        asyncDispatch(() => null, {}, 300);
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
});
