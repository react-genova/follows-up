import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from './Grid.styled';
import Sign from '../signs/Sign';
import { playingTypePropTypes, valuePropTypes } from './Grid.types';

const GridCell = ({
    index,
    value,
    valid,
    playingType,
    onClick,
    highlight,
}) => (
    <Cell highlight={highlight} type={value}>
        <Sign className={`cell-${index}`} hasValue={valid} type={valid ? value : playingType} onClick={() => onClick(index)} />
    </Cell>
);

GridCell.propTypes = {
    value: valuePropTypes.isRequired,
    valid: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    highlight: PropTypes.bool.isRequired,
    playingType: playingTypePropTypes.isRequired,
    onClick: PropTypes.func,
};

GridCell.defaultProps = {
    onClick: undefined,
};

export default GridCell;
