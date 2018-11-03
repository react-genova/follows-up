import { cleanup } from 'react-testing-library';
import middleware from '../engineMiddleware';
import {
    getPlayer1Ready, getPlayer2Ready,
} from '../../../settings/modules/selectors';
import { isGameStarted } from '../selectors';
import { beginGame } from '../action.creators';

jest.mock('../../../settings/modules/selectors');
jest.mock('../selectors');
jest.mock('../action.creators');

describe('Machine bot middleware', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('propagates any action', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = { type: 'ANY ACTION ' };
        middleware(store)(next)(action);
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('does not generate any action if player 1 is not ready', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = { type: 'ANY ACTION' };
        getPlayer1Ready.mockImplementation(() => false);
        getPlayer2Ready.mockImplementation(() => true);
        isGameStarted.mockImplementation(() => false);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('does not generate any action if player 2 is not ready', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = { type: 'ANY ACTION' };
        getPlayer1Ready.mockImplementation(() => true);
        getPlayer2Ready.mockImplementation(() => false);
        isGameStarted.mockImplementation(() => false);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('does not generate any action if game status is not idle', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = { type: 'ANY ACTION' };
        getPlayer1Ready.mockImplementation(() => true);
        getPlayer2Ready.mockImplementation(() => true);
        isGameStarted.mockImplementation(() => true);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('generates a beginGame action when players are ready and game status is idle', () => {
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = { type: 'ANY ACTION' };
        const beginAction = beginGame();
        getPlayer1Ready.mockImplementation(() => true);
        getPlayer2Ready.mockImplementation(() => true);
        isGameStarted.mockImplementation(() => false);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(2);
        expect(next).toHaveBeenCalledWith(action);
        expect(next).toHaveBeenLastCalledWith(beginAction);
    });
});
