import winningSequences from './types/game.winning.sequences';
import { SIGN_NONE } from './types/signs.constants';

const getWinner = (values) => {
    const result = {
        won: false, draw: false, ended: false, winner: SIGN_NONE, winningSequence: [],
    };
    const winningIndex = winningSequences.findIndex(
        seq => values[seq[0]].valid
        && values[seq[0]].value === values[seq[1]].value
        && values[seq[0]].value === values[seq[2]].value,
    );
    if (winningIndex >= 0) {
        result.winningSequence = winningSequences[winningIndex];
        result.won = true;
        result.winner = values[result.winningSequence[0]].value;
    }
    return result;
};

const getGameResults = (values) => {
    const result = getWinner(values);
    if (result.won) {
        result.draw = false;
        result.ended = true;
    } else {
        result.draw = values.reduce(
            (hasNoneSign, value) => hasNoneSign && value.valid, true,
        );
        result.ended = result.draw;
    }
    return result;
};

export default getGameResults;
