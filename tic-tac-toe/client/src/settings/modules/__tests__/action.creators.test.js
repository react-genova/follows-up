import { UPDATE_PLAYERS, UPDATE_PLAYER_1, UPDATE_PLAYER_2 } from '../action.definitions';
import { updatePlayers, updatePlayer1, updatePlayer2 } from '../action.creators';
import { MOVING_SYMBOL_O, MOVING_SYMBOL_X } from '../types/moving.symbols.constants';
import { PLAYER_TYPE_HUMAN, PLAYER_TYPE_MACHINE } from '../types/player.types.constants';

describe('Settings action creators', () => {
    it('creates a valid updatePlayer1 action', () => {
        const action = updatePlayer1(PLAYER_TYPE_HUMAN, MOVING_SYMBOL_O, 'Bowman');
        expect(action).toEqual({
            type: UPDATE_PLAYER_1,
            payload: {
                name: 'Bowman',
                symbol: MOVING_SYMBOL_O,
                type: PLAYER_TYPE_HUMAN,
                ready: true,
            },
        });
    });

    it('creates a valid updatePlayer2 action', () => {
        const action = updatePlayer2(PLAYER_TYPE_MACHINE, MOVING_SYMBOL_X, 'HAL9000');
        expect(action).toEqual({
            type: UPDATE_PLAYER_2,
            payload: {
                name: 'HAL9000',
                symbol: MOVING_SYMBOL_X,
                type: PLAYER_TYPE_MACHINE,
                ready: true,
            },
        });
    });

    it('creates a valid updatePlayers action', () => {
        const action = updatePlayers(PLAYER_TYPE_HUMAN, MOVING_SYMBOL_O, 'Professor Falken', PLAYER_TYPE_MACHINE, MOVING_SYMBOL_X, 'Joshua');
        expect(action).toEqual({
            type: UPDATE_PLAYERS,
            payload: {
                player1: {
                    name: 'Professor Falken',
                    symbol: MOVING_SYMBOL_O,
                    type: PLAYER_TYPE_HUMAN,
                    ready: true,
                },
                player2: {
                    name: 'Joshua',
                    symbol: MOVING_SYMBOL_X,
                    type: PLAYER_TYPE_MACHINE,
                    ready: true,
                },
            },
        });
    });
});
