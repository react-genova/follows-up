import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer, Cell } from './Grid.styled';
import Sign from '../signs/Sign';
import { playingTypePropTypes, valuesPropTypes } from './Grid.types';

const getIndex = index => index;

const Grid = ({ values, playingType, onCellClick }) => (
    <GridContainer>
        {
            values.map(({ value, valid }, index) => (
                <Cell key={getIndex(index)}>
                    <Sign hasValue={valid} type={valid ? value : playingType} onClick={() => onCellClick(index)} />
                </Cell>))
        }
    </GridContainer>
);

Grid.propTypes = {
    values: valuesPropTypes.isRequired,
    playingType: playingTypePropTypes.isRequired,
    onCellClick: PropTypes.func,
};

Grid.defaultProps = {
    onCellClick: () => null,
};

export default Grid;
