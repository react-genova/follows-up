import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { MenuContainer } from '../Menu';

describe('Menu conatiner', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        const onFireBeginGame = jest.fn();
        const { container, getByText } = render(
            <MenuContainer fireBeginGame={onFireBeginGame} />,
        );
        expect(container.firstChild).toMatchSnapshot();
        fireEvent.click(getByText('Play again'));
        expect(onFireBeginGame).toHaveBeenCalledTimes(1);
    });
});
