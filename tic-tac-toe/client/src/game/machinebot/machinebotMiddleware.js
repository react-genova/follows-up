import { ADD_BOARD_MOVE } from '../../board/modules/action.definitions';
import {
    getPlayer1Symbol, getPlayer1Type, getPlayer2Type, getPlayer2Symbol,
} from '../../settings/modules/selectors';
import { PLAYER_TYPE_MACHINE } from '../../settings/modules/types/player.types.constants';
import { addBoardMove } from '../../board/modules/action.creators';
import { getBoardValues } from '../../board/modules/selectors';
import { makeARandomMove, asyncDispatch } from './machinebotMiddleware.unsafe';
import { UPDATE_PLAYERS } from '../../settings/modules/action.definitions';

const dispatchMachineMove = (dispatch, sign, playerType, playerSymbol, nextMove) => {
    if (PLAYER_TYPE_MACHINE === playerType && sign !== playerSymbol) {
        asyncDispatch(dispatch, addBoardMove(nextMove, playerSymbol));
    }
};

export default ({ getState, dispatch }) => next => (action) => {
    const { type, payload } = action;
    const result = next(action);
    if (UPDATE_PLAYERS === type) {
        const state = getState();
        if (PLAYER_TYPE_MACHINE === getPlayer1Type(state)) {
            const values = getBoardValues(state);
            const nextMove = makeARandomMove(values);
            if (nextMove >= 0) {
                dispatchMachineMove(dispatch, getPlayer2Symbol(state), getPlayer1Type(state), getPlayer1Symbol(state), nextMove);
            }
        }
    } else if (ADD_BOARD_MOVE === type) {
        const state = getState();
        const { sign } = payload;
        const values = getBoardValues(state);
        const nextMove = makeARandomMove(values);
        if (nextMove >= 0) {
            // we have an available move
            dispatchMachineMove(dispatch, sign, getPlayer1Type(state), getPlayer1Symbol(state), nextMove);
            dispatchMachineMove(dispatch, sign, getPlayer2Type(state), getPlayer2Symbol(state), nextMove);
        }
    }
    return result;
};
