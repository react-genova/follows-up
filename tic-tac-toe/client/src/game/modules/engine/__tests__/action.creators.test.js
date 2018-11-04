import { BEGIN_GAME, END_GAME, EXIT_GAME } from '../action.definitions';
import { PLAYER_1_WON, PLAYER_2_WON, DRAW } from '../types/game.results.constants';
import { beginGame, endGame, exitGame } from '../action.creators';

describe('Engine action creators', () => {
    it('creates a valid beginGame action', () => {
        expect(beginGame()).toEqual({
            type: BEGIN_GAME,
            payload: { },
        });
    });

    it('creates a valid endGame action with player 1 winner', () => {
        expect(endGame(PLAYER_1_WON)).toEqual({
            type: END_GAME,
            payload: {
                gameresult: PLAYER_1_WON,
            },
        });
    });

    it('creates a valid endGame action with player 2 winner', () => {
        expect(endGame(PLAYER_2_WON)).toEqual({
            type: END_GAME,
            payload: {
                gameresult: PLAYER_2_WON,
            },
        });
    });

    it('creates a valid endGame action with draw result', () => {
        expect(endGame(DRAW)).toEqual({
            type: END_GAME,
            payload: {
                gameresult: DRAW,
            },
        });
    });

    it('creates a valid exitGame', () => {
        expect(exitGame()).toEqual({
            type: EXIT_GAME,
            payload: { },
        });
    });

});
