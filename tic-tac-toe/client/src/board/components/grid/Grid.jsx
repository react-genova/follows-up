import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from './Grid.styled';
import { playingTypePropTypes, valuesPropTypes } from './Grid.types';
import GridCell from './GridCell';

const getIndex = index => index;

const Grid = ({
    values, playingType, onCellClick, highlightSequence,
}) => (
    <GridContainer>
        {
            values.map(({ value, valid }, index) => (
                <GridCell
                    key={getIndex(index)}
                    valid={valid}
                    value={value}
                    index={index}
                    highlight={highlightSequence.indexOf(index) >= 0}
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
    highlightSequence: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Grid.defaultProps = {
    onCellClick: undefined,
};

export default Grid;
