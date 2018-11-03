import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { isGameIdle } from '../../game/engine/selectors';

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
        const { container } = render(<BodyContainer gameIdle />);
        expect(container.firstChild).toMatchSnapshot();
        expect(container.firstChild.textContent).toBe('GAMEMODE');
    });

    it('renders without crashing (gameStarted)', () => {
        const { container } = render(<BodyContainer />);
        expect(container.firstChild).toMatchSnapshot();
        expect(container.firstChild.firstChild.textContent).toBe('BOARD');
    });

    it('exports valid props throught mapStatetoProps 1', () => {
        const STATE = 'FAKE_STATE';
        isGameIdle.mockImplementation(() => false);
        expect(mapStatetoProps(STATE).gameIdle).toBe(false);
        expect(isGameIdle).toHaveBeenCalledTimes(1);
        expect(isGameIdle).toHaveBeenCalledWith(STATE);
    });

    it('exports valid props throught mapStatetoProps 2', () => {
        const STATE = 'FAKE_STATE';
        isGameIdle.mockImplementation(() => true);
        expect(mapStatetoProps(STATE).gameIdle).toBe(true);
        expect(isGameIdle).toHaveBeenCalledTimes(1);
        expect(isGameIdle).toHaveBeenCalledWith(STATE);
    });
});
