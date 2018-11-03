import {
    getGameStatus,
    getLastResult,
    getTotalDraws,
    getTotalPlayer1Victories,
    getTotalPlayer2Victories,
    isGameStarted,
} from '../selectors';
import { EngineRecord, GameHistoryRecord } from '../types/engine.types';
import { IDLE } from '../types/game.status.constants';

describe('Engine selectors', () => {
    const STATE = new EngineRecord({
        status: 'THE STATUS',
        result: 'THE RESULT',
        history: new GameHistoryRecord({
            draws: 2,
            player1victories: 3,
            player2victories: 4,
        }),
    });

    it('retrieves current game info', () => {
        expect(getGameStatus(STATE)).toBe('THE STATUS');
        expect(getLastResult(STATE)).toBe('THE RESULT');
        expect(isGameStarted(STATE)).toBe(true);
        expect(isGameStarted(STATE.set('status', IDLE))).toBe(false);
    });

    it('retrieves historical data', () => {
        expect(getTotalDraws(STATE)).toBe(2);
        expect(getTotalPlayer1Victories(STATE)).toBe(3);
        expect(getTotalPlayer2Victories(STATE)).toBe(4);
    });
});
