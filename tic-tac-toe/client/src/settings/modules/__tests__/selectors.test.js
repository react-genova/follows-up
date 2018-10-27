import {
    getPlayer1Name, getPlayer1Symbol, getPlayer1Ready, getPlayer1Type,
    getPlayer2Name, getPlayer2Symbol, getPlayer2Ready, getPlayer2Type,
} from '../selectors.js';
import { PlayerRecord, SettingsRecord } from '../types/settings.types';

describe('Settings selectors', () => {

    const STATE = new SettingsRecord({
        player1: new PlayerRecord({
            name: 'onename',
            type: 'onetype',
            symbol: 'onesymbol',
            ready: false,
        }),
        player2: new PlayerRecord({
            name: 'twoname',
            type: 'twotype',
            symbol: 'twosymbol',
            ready: true,
        }),
    });

    it('retrieves player 1 settings', () => {
        expect(getPlayer1Name(STATE)).toBe('onename');
        expect(getPlayer1Ready(STATE)).toBe(false);
        expect(getPlayer1Symbol(STATE)).toBe('onesymbol');
        expect(getPlayer1Type(STATE)).toBe('onetype');
    });

    it('retrieves player 2 settings', () => {
        expect(getPlayer2Name(STATE)).toBe('twoname');
        expect(getPlayer2Ready(STATE)).toBe(true);
        expect(getPlayer2Symbol(STATE)).toBe('twosymbol');
        expect(getPlayer2Type(STATE)).toBe('twotype');
    });
});
