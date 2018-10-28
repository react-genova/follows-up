import { cleanup } from 'react-testing-library';
import middleware from '../machinebotMiddleware';
import {
    getPlayer1Symbol, getPlayer1Type, getPlayer2Type, getPlayer2Symbol,
} from '../../../settings/modules/selectors';
import { getBoardValues } from '../../../board/modules/selectors';
import { makeARandomMove } from '../machinebotMiddleware.unsafe';
import { addBoardMove } from '../../../board/modules/action.creators';
import { MOVING_SYMBOL_O, MOVING_SYMBOL_X } from '../../../settings/modules/types/moving.symbols.constants';
import { PLAYER_TYPE_HUMAN, PLAYER_TYPE_MACHINE } from '../../../settings/modules/types/player.types.constants';

jest.mock('../../../settings/modules/selectors');
jest.mock('../../../board/modules/selectors');
jest.mock('../machinebotMiddleware.unsafe');

describe('Machine bot middleware', () => {
    afterEach(cleanup);

    it('operates only on ADD_BOARD_MOVE action', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = { type: 'ANOTHER ACTION ' };
        middleware(store)(next)(action);
        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('does not generate a move if it is not the machine round (p1 machine)', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = addBoardMove(0, MOVING_SYMBOL_O);
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getBoardValues.mockImplementation(() => []);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenNthCalledWith(1, action);
    });

    it('does not generate a move if it is not the machine round (p2 machine)', () => {
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = addBoardMove(0, MOVING_SYMBOL_O);
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenNthCalledWith(1, action);
    });

    it('generates a move when it is the machine round (p1 machine)', () => {
        const NEXT_MOVE = 1;
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = addBoardMove(0, MOVING_SYMBOL_O);
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(2);
        expect(next).toHaveBeenCalledWith(action);
        expect(next).toHaveBeenCalledWith(addBoardMove(NEXT_MOVE, MOVING_SYMBOL_X));
    });

    it('generates a move when it is the machine round (p2 machine)', () => {
        const NEXT_MOVE = 1;
        const next = jest.fn();
        const store = { getState: jest.fn() };
        const action = addBoardMove(0, MOVING_SYMBOL_X);
        getPlayer1Type.mockImplementation(() => PLAYER_TYPE_HUMAN);
        getPlayer1Symbol.mockImplementation(() => MOVING_SYMBOL_X);
        getPlayer2Type.mockImplementation(() => PLAYER_TYPE_MACHINE);
        getPlayer2Symbol.mockImplementation(() => MOVING_SYMBOL_O);
        getBoardValues.mockImplementation(() => []);
        makeARandomMove.mockImplementation(() => NEXT_MOVE);
        // executing
        middleware(store)(next)(action);
        // checking results
        expect(next).toHaveBeenCalledTimes(2);
        expect(next).toHaveBeenCalledWith(action);
        expect(next).toHaveBeenCalledWith(addBoardMove(NEXT_MOVE, MOVING_SYMBOL_O));
    });
});