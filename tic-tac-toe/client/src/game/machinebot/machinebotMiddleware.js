import { ADD_BOARD_MOVE } from '../../board/modules/action.definitions';
import {
    getPlayer1Symbol, getPlayer1Type, getPlayer2Type, getPlayer2Symbol,
} from '../../settings/modules/selectors';
import { PLAYER_TYPE_MACHINE } from '../../settings/modules/types/player.types.constants';
import { addBoardMove } from '../../board/modules/action.creators';
import { getBoardValues } from '../../board/modules/selectors';
import { makeARandomMove } from './machinebotMiddleware.unsafe';

const dispatchMachineMove = (next, sign, playerType, playerSymbol, nextMove) => {
    if (PLAYER_TYPE_MACHINE === playerType && sign !== playerSymbol) {
        next(addBoardMove(nextMove, playerSymbol));
    }
};

export default ({ getState }) => next => (action) => {
    const { type, payload } = action;
    const result = next(action);
    if (ADD_BOARD_MOVE === type) {
        const state = getState();
        const { sign } = payload;
        const values = getBoardValues(state);
        const nextMove = makeARandomMove(values);
        if (nextMove >= 0) {
            // we have an available move
            dispatchMachineMove(next, sign, getPlayer1Type(state), getPlayer1Symbol(state), nextMove);
            dispatchMachineMove(next, sign, getPlayer2Type(state), getPlayer2Symbol(state), nextMove);
        }
    }
    return result;
};
