import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Checkbox from '../Checkbox';

describe('Checkbox component', () => {
    afterEach(cleanup);

    it('renders without crashing (unchecked)', () => {
        const { container } = render(<Checkbox text="click me" onChange={() => null} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders without crashing (without text)', () => {
        const { container } = render(<Checkbox onChange={() => null} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders without crashing (checked)', () => {
        const { container } = render(<Checkbox value text="click me" onChange={() => null} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
