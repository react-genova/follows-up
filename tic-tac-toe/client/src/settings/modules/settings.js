import { initialSettingsState, PlayerRecord } from './types/settings.types';
import { UPDATE_PLAYER_1, UPDATE_PLAYER_2, UPDATE_PLAYERS } from './action.definitions';

const updatePlayer = (state, payload, player) => state.set(player, new PlayerRecord(payload));

const updatePlayers = (state, payload) => state.withMutations((mutable) => {
    const { player1, player2 } = payload;
    updatePlayer(mutable, player1, 'player1');
    updatePlayer(mutable, player2, 'player2');
});

const settings = (state = initialSettingsState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
    case UPDATE_PLAYER_1:
        return updatePlayer(state, payload, 'player1');
    case UPDATE_PLAYER_2:
        return updatePlayer(state, payload, 'player2');
    case UPDATE_PLAYERS:
        return updatePlayers(state, payload);
    default:
        return state;
    }
};

export default settings;
