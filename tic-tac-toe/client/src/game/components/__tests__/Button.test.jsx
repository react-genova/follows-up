import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Button from '../Button';

describe('Button component', () => {
    afterEach(cleanup);

    it('renders without crashing (empty)', () => {
        const { container } = render(<Button />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders without crashing (filled)', () => {
        const { container } = render(
            <Button text="Play again" />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
