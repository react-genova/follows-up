import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from './Grid.styled';
import { playingTypePropTypes, valuesPropTypes } from './Grid.types';
import GridCell from './GridCell';

const getIndex = index => index;

const Grid = ({ values, playingType, onCellClick }) => (
    <GridContainer>
        {
            values.map(({ value, valid }, index) => (
                <GridCell
                    key={getIndex(index)}
                    valid={valid}
                    value={value}
                    index={index}
                    playingType={playingType}
                    onClick={onCellClick}
                />
            ))
        }
    </GridContainer>
);

Grid.propTypes = {
    values: valuesPropTypes.isRequired,
    playingType: playingTypePropTypes.isRequired,
    onCellClick: PropTypes.func,
};

Grid.defaultProps = {
    onCellClick: undefined,
};

export default Grid;
