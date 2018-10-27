import { List, Record } from 'immutable';
import { SIGN_NONE } from './signs.constants';

export const BoardRecord = Record({
    values: List([
        SIGN_NONE, SIGN_NONE, SIGN_NONE,
        SIGN_NONE, SIGN_NONE, SIGN_NONE,
        SIGN_NONE, SIGN_NONE, SIGN_NONE,
    ]),
});

export const initialBoardState = new BoardRecord();
