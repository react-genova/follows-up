import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { BoardContainer, mapStateToProps, mapDispatchToProps } from '../BoardContainer';
import { getPlayer1Symbol } from '../../../settings/modules/selectors';
import { getBoardValues } from '../../modules/selectors';
import { addBoardMove } from '../../modules/action.creators';
import { SIGN_X, SIGN_O, SIGN_NONE } from '../../modules/types/signs.constants';

jest.mock('../../../settings/modules/selectors');
jest.mock('../../modules/selectors');
jest.mock('../../modules/action.creators');

describe('Board conatiner', () => {
    afterEach(cleanup);

    it('creates valid props from state', () => {
        // setting up mocks
        const STATE = 'I am state';
        const PLAYER_1_SYMBOL = 'EX';
        const BOARD_VALUES = ['EX', 'EX', 'CIRCLE', 'EX'];
        getPlayer1Symbol.mockImplementation(() => PLAYER_1_SYMBOL);
        getBoardValues.mockImplementation(() => BOARD_VALUES);
        // invoking the method to test
        const props = mapStateToProps(STATE);
        // check result
        expect(getPlayer1Symbol).toHaveBeenCalledTimes(1);
        expect(getBoardValues).toHaveBeenCalledTimes(1);
        expect(getPlayer1Symbol).toHaveBeenCalledWith(STATE);
        expect(getBoardValues).toHaveBeenCalledWith(STATE);
        expect(props).toEqual({
            values: BOARD_VALUES,
            playingType: PLAYER_1_SYMBOL,
        });
    });

    it('creates valid props from actions', () => {
        expect(mapDispatchToProps).toEqual({
            addBoardMove,
        });
    });

    it('renders without crashing and fires correct moving action when clicking on an empty cell', () => {
        const PLAYER_1_SYMBOL = SIGN_X;
        const BOARD_VALUES = [
            { value: SIGN_X, valid: true },
            { value: SIGN_O, valid: true },
            { value: SIGN_X, valid: true },
            { value: SIGN_NONE, valid: false }
        ];
        const addBoardMoveMocked = jest.fn();
        const { container } = render(
            <BoardContainer data-testid="board-container" values={BOARD_VALUES} playingType={PLAYER_1_SYMBOL} addBoardMove={addBoardMoveMocked} />,
        );
        expect(container.firstChild).toMatchSnapshot();
        // click on cell with valid value => no action fired
        fireEvent.click(container.firstChild.firstChild.firstChild);
        // click on cell with not valid value => action fired
        fireEvent.click(container.firstChild.lastChild.firstChild);
        expect(addBoardMoveMocked).toHaveBeenCalledTimes(1);
        expect(addBoardMoveMocked).toHaveBeenCalledWith(3, PLAYER_1_SYMBOL);
    });
});
