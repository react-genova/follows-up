import { createSelector } from 'reselect';
import { SIGN_NONE } from './types/signs.constants';
import getResultsFromValues from './board.utils';

let getBoardRoot = state => state;

export const setBoardRoot = (getter) => {
    getBoardRoot = getter;
};

export const getBoard = state => getBoardRoot(state);

export const getBoardValues = createSelector([getBoard], board => board.get('values').map(value => ({
    value,
    valid: SIGN_NONE !== value,
})).toJS());

export const getBoardResults = createSelector([getBoardValues], getResultsFromValues);

export const getWinningSequence = createSelector([getBoardResults], results => results.winningSequence);
