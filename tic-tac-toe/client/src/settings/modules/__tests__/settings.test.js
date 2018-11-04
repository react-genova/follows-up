import * as matchers from 'jest-immutable-matchers';
import settings from '../settings';
import { initialSettingsState, PlayerRecord, SettingsRecord } from '../types/settings.types';
import {
    updatePlayers, updatePlayer1, updatePlayer2, changeAutoplay, changeBotSpeed,
} from '../action.creators';
import { MOVING_SYMBOL_O, MOVING_SYMBOL_X } from '../types/moving.symbols.constants';
import { PLAYER_TYPE_HUMAN, PLAYER_TYPE_MACHINE } from '../types/player.types.constants';

describe('Settings reducer', () => {
    beforeEach(() => jest.addMatchers(matchers));

    it('initializes with a valid starting state', () => {
        const initialState = settings();
        expect(initialState).toEqualImmutable(initialSettingsState);
    });

    it('changes player 1 settings while player 2 remains the same', () => {
        const NAME1 = 'another player';
        const action = updatePlayer1(PLAYER_TYPE_MACHINE, MOVING_SYMBOL_X, NAME1);
        const stateBefore = settings();
        const stateAfter = settings(stateBefore, action);
        expect(stateAfter.get('player1')).toEqualImmutable(new PlayerRecord({
            name: NAME1,
            symbol: MOVING_SYMBOL_X,
            type: PLAYER_TYPE_MACHINE,
            ready: true,
        }));
        expect(stateAfter.get('player2')).toEqualImmutable(stateBefore.get('player2'));
    });

    it('changes player 2 settings while player 1 remains the same', () => {
        const NAME2 = 'another player 2';
        const action = updatePlayer2(PLAYER_TYPE_HUMAN, MOVING_SYMBOL_O, NAME2);
        const stateBefore = settings();
        const stateAfter = settings(stateBefore, action);
        expect(stateAfter.get('player2')).toEqualImmutable(new PlayerRecord({
            name: NAME2,
            symbol: MOVING_SYMBOL_O,
            type: PLAYER_TYPE_HUMAN,
            ready: true,
        }));
        expect(stateAfter.get('player1')).toEqualImmutable(stateBefore.get('player1'));
    });

    it('changes player 1 and player 2 settings', () => {
        const NAME1 = 'another player';
        const NAME2 = 'another player 2';
        const action = updatePlayers(
            PLAYER_TYPE_MACHINE, MOVING_SYMBOL_X, NAME1, PLAYER_TYPE_HUMAN, MOVING_SYMBOL_O, NAME2,
        );
        const stateBefore = settings();
        const stateAfter = settings(stateBefore, action);
        const player1 = new PlayerRecord({
            name: NAME1,
            symbol: MOVING_SYMBOL_X,
            type: PLAYER_TYPE_MACHINE,
            ready: true,
        });
        const player2 = new PlayerRecord({
            name: NAME2,
            symbol: MOVING_SYMBOL_O,
            type: PLAYER_TYPE_HUMAN,
            ready: true,
        });
        expect(stateAfter).toEqualImmutable(new SettingsRecord({
            player1,
            player2,
        }));
    });

    it('changes autoplay to true than to false finally to true again', () => {
        const STATE = new SettingsRecord();
        const STATE_1 = settings(STATE, changeAutoplay(true));
        expect(STATE_1).toEqualImmutable(STATE.setIn(['options', 'autoplay'], true));
        const STATE_2 = settings(STATE_1, changeAutoplay(false));
        expect(STATE_2).toEqualImmutable(STATE_1.setIn(['options', 'autoplay'], false));
        const STATE_3 = settings(STATE_2, changeAutoplay(true));
        expect(STATE_3).toEqualImmutable(STATE_2.setIn(['options', 'autoplay'], true));
    });

    it('changes botSpeed twice', () => {
        const STATE = new SettingsRecord();
        const STATE_1 = settings(STATE, changeBotSpeed(6));
        expect(STATE_1).toEqualImmutable(STATE.setIn(['options', 'botSpeed'], 6));
        const STATE_2 = settings(STATE_1, changeBotSpeed(2));
        expect(STATE_2).toEqualImmutable(STATE_1.setIn(['options', 'botSpeed'], 2));
    });
});
