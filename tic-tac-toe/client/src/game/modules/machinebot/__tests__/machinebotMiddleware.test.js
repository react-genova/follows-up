import { cleanup } from 'react-testing-library';
import middleware from '../machinebotMiddleware';
import {
    getPlayer1Symbol, getPlayer1Type, getPlayer2Type, getPlayer2Symbol,
} from '../../../../settings/modules/selectors';
import { getBoardValues } from '../../../../board/modules/selectors';
import { makeARandomMove, asyncDispatch } from '../machinebotMiddleware.unsafe';
import { addBoardMove } from '../../../../board/modules/action.creators';
import { beginGame } from '../../engine/action.creators';
import { MOVING_SYMBOL_O, MOVING_SYMBOL_X } from '../../../../settings/modules/types/moving.symbols.constants';
import { PLAYER_TYPE_HUMAN, PLAYER_TYPE_MACHINE } from '../../../../settings/modules/types/player.types.constants';
import { isGameStarted } from '../../engine/selectors';

jest.mock('../../../../settings/modules/selectors');
jest.mock('../../../../board/modules/selectors');
jest.mock('../../engine/selectors');
jest.mock('../machinebotMiddleware.unsafe');

describe('Machine bot middleware', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('operates only on ADD_BOARD_MOVE action', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = { type: 'ANOTHER ACTION ' };
        isGameStarted.mockImplementation(() => true);
        middleware(store)(next)(action);
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('does not generate a move if game has not started', () => {
        const NEXT_MOVE = 1;
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = { type: 'fake' };
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        asyncDispatch.mockImplementation(() => null);
        isGameStarted.mockImplementation(() => false);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenNthCalledWith(1, action);
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });

    it('does not generate a move if it is not the machine round (p1 machine)', () => {
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = addBoardMove(0, MOVING_SYMBOL_O);
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getBoardValues.mockImplementation(() => []);
        isGameStarted.mockImplementation(() => true);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenNthCalledWith(1, action);
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });

    it('does not generate a move if it is not the machine round (p2 machine)', () => {
        const NEXT_MOVE = 1;
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = addBoardMove(0, MOVING_SYMBOL_O);
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        asyncDispatch.mockImplementation(() => null);
        isGameStarted.mockImplementation(() => true);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenNthCalledWith(1, action);
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });

    it('generates a move when it is the machine round (p1 machine)', () => {
        const NEXT_MOVE = 1;
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = addBoardMove(0, MOVING_SYMBOL_O);
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        asyncDispatch.mockImplementation(() => null);
        isGameStarted.mockImplementation(() => true);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(asyncDispatch)
            .toHaveBeenCalledWith(store.dispatch, addBoardMove(NEXT_MOVE, MOVING_SYMBOL_X));
    });

    it('generates a move when it is the machine round (p2 machine)', () => {
        const NEXT_MOVE = 1;
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = addBoardMove(0, MOVING_SYMBOL_X);
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        asyncDispatch.mockImplementation(() => null);
        isGameStarted.mockImplementation(() => true);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(asyncDispatch)
            .toHaveBeenCalledWith(store.dispatch, addBoardMove(NEXT_MOVE, MOVING_SYMBOL_O));
    });

    it('generates a move on game start with a p1 machine', () => {
        const NEXT_MOVE = 1;
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = beginGame();
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        asyncDispatch.mockImplementation(() => null);
        isGameStarted.mockImplementation(() => true);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(asyncDispatch)
            .toHaveBeenCalledWith(store.dispatch, addBoardMove(NEXT_MOVE, MOVING_SYMBOL_X));
    });

    it('does not generate a move on game start with a p1 human', () => {
        const NEXT_MOVE = 1;
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = beginGame();
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        asyncDispatch.mockImplementation(() => null);
        isGameStarted.mockImplementation(() => true);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(asyncDispatch).toHaveBeenCalledTimes(0);
    });

    it('does not generate any further moves on addBoardMove if no moves are available', () => {
        const NEXT_MOVE = -1;
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = addBoardMove(0, MOVING_SYMBOL_O);
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        asyncDispatch.mockImplementation(() => null);
        isGameStarted.mockImplementation(() => true);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(asyncDispatch).toHaveBeenCalledTimes(0);
    });

    it('does not generate a move on game start when no moves are available (unreal situation)', () => {
        const NEXT_MOVE = -1;
        const next = jest.fn();
        const store = { getState: jest.fn(), dispatch: jest.fn() };
        const action = beginGame();
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        asyncDispatch.mockImplementation(() => null);
        isGameStarted.mockImplementation(() => true);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
        expect(asyncDispatch).toHaveBeenCalledTimes(0);
    });
});
