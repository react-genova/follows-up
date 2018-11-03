import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import GamesHistory from '../GamesHistory';

describe('GamesHistory component', () => {
    afterEach(cleanup);

    it('renders without crashing (empty)', () => {
        const { container } = render(<GamesHistory />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders without crashing (filled)', () => {
        const { container } = render(
            <GamesHistory player1score={11} player2score={8} draws={23} />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
