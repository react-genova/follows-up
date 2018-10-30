import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import GridCell from '../GridCell';
import { SIGN_O, SIGN_X } from '../../../modules/types/signs.constants';

describe('GridCell component', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        const { container } = render(<GridCell index={0} value={SIGN_O} valid playingType={SIGN_X} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const onClick = jest.fn();
        const INDEX = 43;
        const { container } = render(<GridCell index={INDEX} value={SIGN_O} valid playingType={SIGN_X} onClick={onClick} />);
        fireEvent.click(container.firstChild.firstChild);
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClick).toHaveBeenCalledWith(INDEX);
    });
});
