import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Grid from '../Grid';
import { SIGN_O, SIGN_X, SIGN_NONE } from '../../../modules/types/signs.constants';

describe('Grid component', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        const VALUES = [
            { value: SIGN_O, valid: true },
            { value: SIGN_X, valid: true },
            { value: SIGN_NONE, valid: true },
        ];
        const { container } = render(<Grid values={VALUES} playingType={SIGN_O} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
