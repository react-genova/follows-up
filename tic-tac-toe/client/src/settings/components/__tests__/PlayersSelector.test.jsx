import React from 'react';
import { fireEvent, render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import PlayersSelector from '../PlayersSelector';

describe('PlayersSelector component', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        const { container } = render(<PlayersSelector>{() => null}</PlayersSelector>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('invokes child as function with #E0E0E0 on mount', () => {
        const CHILDREN = jest.fn();
        render(<PlayersSelector>{CHILDREN}</PlayersSelector>);
        expect(CHILDREN).toHaveBeenCalledTimes(1);
        expect(CHILDREN).toHaveBeenCalledWith('#909090');
    });

    it('invokes child as function with #E0E0E0 on mount', () => {
        const CHILDREN = jest.fn();
        const onClick = jest.fn();
        const { container } = render(
            <PlayersSelector className="test" onClick={onClick}>{CHILDREN}</PlayersSelector>,
        );
        const element = container.querySelector('.test');
        fireEvent.click(element);
        expect(onClick).toHaveBeenCalledTimes(1);

        fireEvent.mouseEnter(element);
        fireEvent.mouseLeave(element);
        expect(CHILDREN).toHaveBeenCalledTimes(3);
        expect(CHILDREN).toHaveBeenCalledWith('#909090');
        expect(CHILDREN).toHaveBeenCalledWith('#E0E0E0');
        expect(CHILDREN).toHaveBeenLastCalledWith('#909090');
    });
});
