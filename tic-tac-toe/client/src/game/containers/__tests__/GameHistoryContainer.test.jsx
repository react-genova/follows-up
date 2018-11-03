import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { GameHistoryContainer, mapStateToProps } from '../GameHistoryContainer';
import { SIGN_X, SIGN_O } from '../../../board/modules/types/signs.constants';
import { getTotalDraws, getTotalPlayer1Victories, getTotalPlayer2Victories } from '../../modules/engine/selectors';
import {
    getPlayer1Symbol, getPlayer1Name, getPlayer2Name, getPlayer2Symbol,
} from '../../../settings/modules/selectors';

jest.mock('../../../settings/modules/selectors');
jest.mock('../../modules/engine/selectors');

describe('Board conatiner', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        const { container } = render(
            <GameHistoryContainer
                draws={1}
                player1score={1}
                player2score={1}
                player1sign={SIGN_O}
                player1name=""
                player2name=""
                player2sign={SIGN_X}
            />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('creates valid props from state', () => {
        // setting up mocks
        const STATE = 'I am state';
        getTotalDraws.mockImplementation(() => 1);
        getTotalPlayer1Victories.mockImplementation(() => 2);
        getTotalPlayer2Victories.mockImplementation(() => 3);
        getPlayer1Symbol.mockImplementation(() => 4);
        getPlayer1Name.mockImplementation(() => 5);
        getPlayer2Name.mockImplementation(() => 6);
        getPlayer2Symbol.mockImplementation(() => 7);
        // invoking the method to test
        const props = mapStateToProps(STATE);
        // check result
        expect(getTotalDraws).toHaveBeenCalledTimes(1);
        expect(getTotalPlayer1Victories).toHaveBeenCalledTimes(1);
        expect(getTotalPlayer2Victories).toHaveBeenCalledTimes(1);
        expect(getPlayer1Symbol).toHaveBeenCalledTimes(1);
        expect(getPlayer1Name).toHaveBeenCalledTimes(1);
        expect(getPlayer2Name).toHaveBeenCalledTimes(1);
        expect(getPlayer2Symbol).toHaveBeenCalledTimes(1);
        expect(getTotalDraws).toHaveBeenCalledWith(STATE);
        expect(getTotalPlayer1Victories).toHaveBeenCalledWith(STATE);
        expect(getTotalPlayer2Victories).toHaveBeenCalledWith(STATE);
        expect(getPlayer1Symbol).toHaveBeenCalledWith(STATE);
        expect(getPlayer1Name).toHaveBeenCalledWith(STATE);
        expect(getPlayer2Name).toHaveBeenCalledWith(STATE);
        expect(getPlayer2Symbol).toHaveBeenCalledWith(STATE);

        expect(props).toEqual({
            draws: 1,
            player1score: 2,
            player2score: 3,
            player1sign: 4,
            player1name: 5,
            player2name: 6,
            player2sign: 7,
        });
    });
});
