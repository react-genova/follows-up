import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Sign from '../Sign';
import { SIGN_O, SIGN_X } from '../../../modules/types/signs.constants';

describe('SignO component', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        const { container } = render(<Sign />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders default sign with value', () => {
        const { container } = render(<Sign hasValue />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders O sign with value', () => {
        const { container } = render(<Sign hasValue type={SIGN_O} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders X sign with value', () => {
        const { container } = render(<Sign hasValue type={SIGN_X} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('invokes click callback', () => {
        const onClick = jest.fn();
        const { container } = render(<Sign className="sign-test" hasValue type={SIGN_X} onClick={onClick} />);
        fireEvent.click(container.querySelector('.sign-test'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('simulates hover active without value', () => {
        const onClick = jest.fn();
        const { container } = render(<Sign className="sign-test" type={SIGN_X} onClick={onClick} />);
        fireEvent.mouseEnter(container.querySelector('.sign-test'));
        expect(container.firstChild).toMatchSnapshot();
        expect(container.querySelectorAll('.sign-x').length).toBe(1);
        expect(container.querySelectorAll('.sign-o').length).toBe(0);
        fireEvent.mouseLeave(container.querySelector('.sign-test'));
        expect(container.firstChild).toMatchSnapshot();
        expect(container.querySelectorAll('.sign-x').length).toBe(0);
        expect(container.querySelectorAll('.sign-o').length).toBe(0);
        expect(onClick).toHaveBeenCalledTimes(0);
    });
});
