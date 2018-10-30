import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import SignO from '../SignO';

describe('SignO component', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        const { container } = render(<SignO />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders without crashing (ghost)', () => {
        const { container } = render(<SignO ghost />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
