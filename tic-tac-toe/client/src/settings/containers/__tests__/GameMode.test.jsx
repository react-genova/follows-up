import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { GameMode } from '../GameMode';
import { updatePlayers } from '../../modules/action.creators';
import { SIGN_X, SIGN_O } from '../../../board/modules/types/signs.constants';
import { PLAYER_TYPE_MACHINE, PLAYER_TYPE_HUMAN } from '../../modules/types/player.types.constants';

jest.mock('../../modules/action.creators');

describe('GameMode component', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    beforeEach(() => updatePlayers.mockImplementation(() => null));

    it('renders without crashing', () => {
        const { container } = render(<GameMode />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('fires updatePlayers for human vs machine', () => {
        const { container } = render(<GameMode updatePlayers={updatePlayers} />);
        fireEvent.click(container.querySelector('.game-human-machine'));
        expect(updatePlayers).toHaveBeenCalledTimes(1);
        expect(updatePlayers).toHaveBeenCalledWith(PLAYER_TYPE_HUMAN, SIGN_O, 'Player 1', PLAYER_TYPE_MACHINE, SIGN_X, 'Player 2');
    });

    it('fires updatePlayers for machine vs machine', () => {
        const { container } = render(<GameMode updatePlayers={updatePlayers} />);
        fireEvent.click(container.querySelector('.game-machine-machine'));
        expect(updatePlayers).toHaveBeenCalledTimes(1);
        expect(updatePlayers).toHaveBeenCalledWith(PLAYER_TYPE_MACHINE, SIGN_O, 'Player 1', PLAYER_TYPE_MACHINE, SIGN_X, 'Player 2');
    });

    it('fires updatePlayers for human vs human', () => {
        const { container } = render(<GameMode updatePlayers={updatePlayers} />);
        fireEvent.click(container.querySelector('.game-human-human'));
        expect(updatePlayers).toHaveBeenCalledTimes(0); // STILL NOT SUPPORTED
    });
});
