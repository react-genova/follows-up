import { createSelector } from 'reselect';
import { SIGN_NONE } from './types/signs.constants';

let getBoardRoot = state => state;

export const setBoardRoot = (getter) => {
    getBoardRoot = getter;
};

export const getBoard = state => getBoardRoot(state);

export const getBoardValues = createSelector([getBoard], board => board.get('values').map(value => ({
    value,
    valid: SIGN_NONE !== value,
})).toJS());
