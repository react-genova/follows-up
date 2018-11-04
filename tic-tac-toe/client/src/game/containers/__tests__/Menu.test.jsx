import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { MenuContainer, mapStateToProps } from '../Menu';
import { getAutoplay } from '../../../settings/modules/selectors';

jest.mock('../../../settings/modules/selectors');

describe('Menu conatiner', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('exports valid props', () => {
        const STATE = 'FAKE STATE';
        getAutoplay.mockImplementation(() => true);
        expect(mapStateToProps(STATE)).toEqual({
            autoplay: true,
        });
    });

    it('renders without crashing', () => {
        const onFireBeginGame = jest.fn();
        const onFireChangeAutoplay = jest.fn();
        const { container, getByText } = render(
            <MenuContainer
                autoplay
                fireBeginGame={onFireBeginGame}
                fireChangeAutoplay={onFireChangeAutoplay}
            />,
        );
        expect(container.firstChild).toMatchSnapshot();
        fireEvent.click(getByText('Play again'));
        expect(onFireBeginGame).toHaveBeenCalledTimes(1);
        fireEvent.click(getByText('Autoplay'));
        expect(onFireChangeAutoplay).toHaveBeenCalledTimes(1);
        expect(onFireChangeAutoplay).toHaveBeenCalledWith(false);
    });
});
