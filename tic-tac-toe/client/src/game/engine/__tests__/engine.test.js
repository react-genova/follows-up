import * as matchers from 'jest-immutable-matchers';
import engine from '../engine';
import {
    PLAYER_1_WON,
    PLAYER_2_WON,
    DRAW, NONE,
} from '../types/game.results.constants';
import { STARTED, WAITING_FOR_START, IDLE } from '../types/game.status.constants';
import { beginGame, endGame, exitGame } from '../action.creators';
import { initialEngineState, EngineRecord, GameHistoryRecord } from '../types/engine.types';

describe('Engine reducer', () => {
    beforeEach(() => jest.addMatchers(matchers));

    const FILLED_STATE = new EngineRecord({
        status: WAITING_FOR_START,
        result: DRAW,
        history: new GameHistoryRecord({
            draws: 2,
            player1victories: 4,
            player2victories: 6,
        }),
    });

    const IDLE_STATE = new EngineRecord({
        status: IDLE,
        result: NONE,
        history: new GameHistoryRecord({
            draws: 0,
            player1victories: 0,
            player2victories: 0,
        }),
    });

    const JUSTSTARTED_STATE = new EngineRecord({
        status: STARTED,
        result: NONE,
        history: new GameHistoryRecord({
            draws: 0,
            player1victories: 0,
            player2victories: 0,
        }),
    });

    it('initializes with a valid starting state', () => {
        const initialState = engine();
        expect(initialState).toEqualImmutable(IDLE_STATE);
    });

    it('starts the match from an idle status', () => {
        expect(engine(initialEngineState, beginGame())).toEqualImmutable(JUSTSTARTED_STATE);
    });

    it('starts the match with a filled history', () => {
        const stateBefore = FILLED_STATE;
        expect(engine(stateBefore, beginGame())).toEqualImmutable(new EngineRecord({
            status: STARTED,
            result: NONE,
            history: new GameHistoryRecord({
                draws: 2,
                player1victories: 4,
                player2victories: 6,
            }),
        }));
    });

    it('exits the match', () => {
        expect(engine(FILLED_STATE, exitGame())).toEqualImmutable(IDLE_STATE);
    });

    it('ends first game of the match', () => {
        const stateBefore = JUSTSTARTED_STATE;
        expect(engine(stateBefore, endGame(PLAYER_1_WON))).toEqualImmutable(new EngineRecord({
            status: WAITING_FOR_START,
            result: PLAYER_1_WON,
            history: new GameHistoryRecord({
                draws: 0,
                player1victories: 1,
                player2victories: 0,
            }),
        }));
    });

    it('ends game with a draw', () => {
        const stateBefore = FILLED_STATE;
        expect(engine(stateBefore, endGame(DRAW))).toEqualImmutable(new EngineRecord({
            status: WAITING_FOR_START,
            result: DRAW,
            history: new GameHistoryRecord({
                draws: 3,
                player1victories: 4,
                player2victories: 6,
            }),
        }));
    });

    it('ends game with player 1 victory', () => {
        const stateBefore = FILLED_STATE;
        expect(engine(stateBefore, endGame(PLAYER_1_WON))).toEqualImmutable(new EngineRecord({
            status: WAITING_FOR_START,
            result: PLAYER_1_WON,
            history: new GameHistoryRecord({
                draws: 2,
                player1victories: 5,
                player2victories: 6,
            }),
        }));
    });

    it('ends game with player 2 victory', () => {
        const stateBefore = FILLED_STATE;
        expect(engine(stateBefore, endGame(PLAYER_2_WON))).toEqualImmutable(new EngineRecord({
            status: WAITING_FOR_START,
            result: PLAYER_2_WON,
            history: new GameHistoryRecord({
                draws: 2,
                player1victories: 4,
                player2victories: 7,
            }),
        }));
    });
});
