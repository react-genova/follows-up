import { UPDATE_PLAYERS, UPDATE_PLAYER_1, UPDATE_PLAYER_2 } from './action.definitions';

export const updatePlayer1 = (type, symbol, name) => ({
    type: UPDATE_PLAYER_1,
    payload: {
        name,
        symbol,
        type,
        ready: true,
    },
});

export const updatePlayer2 = (type, symbol, name) => ({
    type: UPDATE_PLAYER_2,
    payload: {
        name,
        symbol,
        type,
        ready: true,
    },
});

export const updatePlayers = (type1, symbol1, name1, type2, symbol2, name2) => ({
    type: UPDATE_PLAYERS,
    payload: {
        player1: {
            name: name1,
            symbol: symbol1,
            type: type1,
            ready: true,
        },
        player2: {
            name: name2,
            symbol: symbol2,
            type: type2,
            ready: true,
        },
    },
});
