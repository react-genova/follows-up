import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { getPlayer1Ready, getPlayer2Ready } from '../../settings/modules/selectors';
// import Board from '../../board/containers/BoardContainer';
// import GameModeSelection from '../../settings/containers/GameMode';

jest.mock('../../settings/modules/selectors');
jest.mock('../../board/containers/BoardContainer', () => () => 'BOARD');
jest.mock('../../settings/containers/GameMode', () => () => 'GAMEMODE');

const { BodyContainer, mapStatetoProps } = require('../BodyContainer');


describe('BodyContainer component', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        const { container } = render(<BodyContainer />);
        expect(container.firstChild).toMatchSnapshot();
        expect(container.firstChild.textContent).toBe('GAMEMODE');
    });

    it('renders without crashing (playersReady)', () => {
        const { container } = render(<BodyContainer playersReady />);
        expect(container.firstChild).toMatchSnapshot();
        expect(container.firstChild.firstChild.textContent).toBe('BOARD');
    });

    it('exports valid props throught mapStatetoProps', () => {
        const STATE = 'FAKE_STATE';
        const check = (one, two) => {
            getPlayer1Ready.mockImplementation(() => one);
            getPlayer2Ready.mockImplementation(() => two);
            expect(mapStatetoProps(STATE).playersReady).toBe(one && two);
            getPlayer1Ready.mockClear();
            getPlayer2Ready.mockClear();
        };
        check(true, true);
        check(true, false);
        check(false, true);
        check(false, false);
    });
});
