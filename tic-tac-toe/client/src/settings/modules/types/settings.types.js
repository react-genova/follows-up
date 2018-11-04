import { Record } from 'immutable';
import { MOVING_SYMBOL_O, MOVING_SYMBOL_X } from './moving.symbols.constants';
import { PLAYER_TYPE_MACHINE, PLAYER_TYPE_HUMAN } from './player.types.constants';

export const OptionsRecord = Record({
    autoplay: false,
    botSpeed: 5,
});

export const PlayerRecord = Record({
    name: 'player',
    type: PLAYER_TYPE_MACHINE,
    symbol: MOVING_SYMBOL_O,
    ready: false,
});

export const SettingsRecord = Record({
    player1: new PlayerRecord(),
    player2: new PlayerRecord(),
    options: new OptionsRecord(),
});

export const initialSettingsState = new SettingsRecord({
    player1: new PlayerRecord({
        name: 'Player 1',
        type: PLAYER_TYPE_HUMAN,
        symbol: MOVING_SYMBOL_O,
    }),
    player2: new PlayerRecord({
        name: 'Player 2',
        type: PLAYER_TYPE_MACHINE,
        symbol: MOVING_SYMBOL_X,
    }),
    options: new OptionsRecord(),
});
