import { createSelector } from 'reselect';

let getBoardRoot = state => state;

export const setBoardRoot = (getter) => {
    getBoardRoot = getter;
};

export const getBoard = state => getBoardRoot(state);

export const getBoardValues = createSelector([getBoard], board => board.get('values').toJS());
