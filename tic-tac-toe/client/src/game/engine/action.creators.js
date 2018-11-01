import { BEGIN_GAME, END_GAME, EXIT_GAME } from './action.definitions';

export const beginGame = () => ({
    type: BEGIN_GAME,
    payload: { },
});

export const endGame = gameresult => ({
    type: END_GAME,
    payload: {
        gameresult,
    },
});

export const exitGame = () => ({
    type: EXIT_GAME,
    payload: { },
});
