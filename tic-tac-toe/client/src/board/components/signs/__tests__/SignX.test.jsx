import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import SignX from '../SignX';

describe('SignX component', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        const { container } = render(<SignX />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders without crashing (ghost)', () => {
        const { container } = render(<SignX ghost />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
