import { cleanup } from 'react-testing-library';
import middleware from '../engineMiddleware';
import {
    getPlayer1Ready, getPlayer2Ready, getPlayer1Symbol, getPlayer2Symbol,
} from '../../../settings/modules/selectors';
import { isGameStarted, isGameIdle } from '../selectors';
import { beginGame, endGame } from '../action.creators';
import { SIGN_NONE } from '../../../board/modules/types/signs.constants';
import { PLAYER_1_WON, PLAYER_2_WON, DRAW } from '../types/game.results.constants';
import { getBoardResults } from '../../../board/modules/selectors';

jest.mock('../../../settings/modules/selectors');
jest.mock('../selectors');
jest.mock('../action.creators');
jest.mock('../../../board/modules/selectors');

describe('Engine middleware', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    const MATCH_RESULTS_NO_ENDED = {
        won: false, draw: false, ended: false, winner: SIGN_NONE, winningSequence: [],
    };

    it('propagates any action', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = { type: 'ANY ACTION ' };
        middleware(store)(next)(action);
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('does not generate any action if match is not ended', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = { type: 'ANY ACTION' };
        isGameStarted.mockImplementation(() => true);
        getBoardResults.mockImplementation(() => MATCH_RESULTS_NO_ENDED);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('generates endGame action if player 1 won', () => {
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = { type: 'ANY ACTION' };
        isGameStarted.mockImplementation(() => true);
        getPlayer1Symbol.mockImplementation(() => 'X');
        getPlayer2Symbol.mockImplementation(() => 'O');
        const MATCH_RESULTS_P1WON = {
            ...MATCH_RESULTS_NO_ENDED,
            won: true,
            ended: true,
            winner: 'X',
        };
        const endGameAction = endGame(PLAYER_1_WON);
        getBoardResults.mockImplementation(() => MATCH_RESULTS_P1WON);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenLastCalledWith(endGameAction);
    });

    it('generates endGame action if player 1 won', () => {
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = { type: 'ANY ACTION' };
        isGameStarted.mockImplementation(() => true);
        getPlayer1Symbol.mockImplementation(() => 'X');
        getPlayer2Symbol.mockImplementation(() => 'O');
        const MATCH_RESULTS_P2WON = {
            ...MATCH_RESULTS_NO_ENDED,
            won: true,
            ended: true,
            winner: 'O',
        };
        const endGameAction = endGame(PLAYER_2_WON);
        getBoardResults.mockImplementation(() => MATCH_RESULTS_P2WON);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenLastCalledWith(endGameAction);
    });

    it('generates endGame action if a draw occurred', () => {
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = { type: 'ANY ACTION' };
        isGameStarted.mockImplementation(() => true);
        getPlayer1Symbol.mockImplementation(() => 'X');
        getPlayer2Symbol.mockImplementation(() => 'O');
        const MATCH_RESULTS_DRAW = {
            ...MATCH_RESULTS_NO_ENDED,
            draw: true,
            ended: true,
            won: false,
            winner: '_',
        };
        const endGameAction = endGame(DRAW);
        getBoardResults.mockImplementation(() => MATCH_RESULTS_DRAW);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenLastCalledWith(endGameAction);
    });

    it('does not generate any action if player 1 is not ready', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = { type: 'ANY ACTION' };
        getPlayer1Ready.mockImplementation(() => false);
        getPlayer2Ready.mockImplementation(() => true);
        isGameStarted.mockImplementation(() => false);
        isGameIdle.mockImplementation(() => true);
        getBoardResults.mockImplementation(() => MATCH_RESULTS_NO_ENDED);
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
        isGameIdle.mockImplementation(() => true);
        getBoardResults.mockImplementation(() => MATCH_RESULTS_NO_ENDED);
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
        isGameIdle.mockImplementation(() => false);
        getBoardResults.mockImplementation(() => MATCH_RESULTS_NO_ENDED);
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
        isGameIdle.mockImplementation(() => true);
        isGameStarted.mockImplementation(() => false);
        getBoardResults.mockImplementation(() => MATCH_RESULTS_NO_ENDED);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenLastCalledWith(beginAction);
    });
});
