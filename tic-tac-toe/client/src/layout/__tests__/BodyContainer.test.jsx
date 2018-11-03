import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { isGameStarted } from '../../game/engine/selectors';

jest.mock('../../game/engine/selectors');
jest.mock('../../board/containers/BoardContainer', () => () => 'BOARD');
jest.mock('../../settings/containers/GameMode', () => () => 'GAMEMODE');

const { BodyContainer, mapStatetoProps } = require('../BodyContainer');


describe('BodyContainer component', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        const { container } = render(<BodyContainer />);
        expect(container.firstChild).toMatchSnapshot();
        expect(container.firstChild.textContent).toBe('GAMEMODE');
    });

    it('renders without crashing (gameStarted)', () => {
        const { container } = render(<BodyContainer gameStarted />);
        expect(container.firstChild).toMatchSnapshot();
        expect(container.firstChild.firstChild.textContent).toBe('BOARD');
    });

    it('exports valid props throught mapStatetoProps 1', () => {
        const STATE = 'FAKE_STATE';
        isGameStarted.mockImplementation(() => false);
        expect(mapStatetoProps(STATE).gameStarted).toBe(false);
        expect(isGameStarted).toHaveBeenCalledTimes(1);
        expect(isGameStarted).toHaveBeenCalledWith(STATE);
    });

    it('exports valid props throught mapStatetoProps 2', () => {
        const STATE = 'FAKE_STATE';
        isGameStarted.mockImplementation(() => true);
        expect(mapStatetoProps(STATE).gameStarted).toBe(true);
        expect(isGameStarted).toHaveBeenCalledTimes(1);
        expect(isGameStarted).toHaveBeenCalledWith(STATE);
    });
});
