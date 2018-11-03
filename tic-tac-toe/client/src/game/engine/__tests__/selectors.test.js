import {
    getGameStatus,
    getLastResult,
    getTotalDraws,
    getTotalPlayer1Victories,
    getTotalPlayer2Victories,
    isGameStarted,
    isGameIdle,
    isGameWaiting,
} from '../selectors';
import { EngineRecord, GameHistoryRecord } from '../types/engine.types';
import { IDLE, STARTED, WAITING_FOR_START } from '../types/game.status.constants';

describe('Engine selectors', () => {
    const STATE = new EngineRecord({
        status: STARTED,
        result: 'THE RESULT',
        history: new GameHistoryRecord({
            draws: 2,
            player1victories: 3,
            player2victories: 4,
        }),
    });

    it('retrieves current game info', () => {
        expect(getGameStatus(STATE)).toBe(STARTED);
        expect(getLastResult(STATE)).toBe('THE RESULT');
        expect(isGameStarted(STATE)).toBe(true);
        expect(isGameIdle(STATE)).toBe(false);
        expect(isGameWaiting(STATE)).toBe(false);
        const STATE_IDLE = STATE.set('status', IDLE);
        expect(isGameStarted(STATE_IDLE)).toBe(false);
        expect(isGameIdle(STATE_IDLE)).toBe(true);
        expect(isGameWaiting(STATE_IDLE)).toBe(false);
        const STATE_WAITING = STATE.set('status', WAITING_FOR_START);
        expect(isGameStarted(STATE_WAITING)).toBe(false);
        expect(isGameIdle(STATE_WAITING)).toBe(false);
        expect(isGameWaiting(STATE_WAITING)).toBe(true);
    });

    it('retrieves historical data', () => {
        expect(getTotalDraws(STATE)).toBe(2);
        expect(getTotalPlayer1Victories(STATE)).toBe(3);
        expect(getTotalPlayer2Victories(STATE)).toBe(4);
    });
});
