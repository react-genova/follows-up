import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer, Cell } from './Grid.styled';
import Sign from '../signs/Sign';
import { SIGN_NONE, SIGN_O, SIGN_X } from '../../modules/types/signs.constants';

const hasValue = value => SIGN_NONE !== value;

const getIndex = index => index;

const getType = (value, playingType) => hasValue(value) ? value : playingType;

const Grid = ({ values, playingType, onCellClick }) => (
    <GridContainer>
        {
            values.map((value, index) => (
                <Cell key={getIndex(index)}>
                    <Sign hasValue={hasValue(value)} type={getType(value, playingType)} onClick={type => onCellClick(index, type, hasValue(value))} />
                </Cell>))
        }
    </GridContainer>
);

Grid.propTypes = {
    values: PropTypes.arrayOf(PropTypes.oneOf([SIGN_NONE, SIGN_O, SIGN_X])).isRequired,
    playingType: PropTypes.oneOf([SIGN_O, SIGN_X]).isRequired,
    onCellClick: PropTypes.func,
};

Grid.defaultProps = {
    onCellClick: () => null,
};

export default Grid;
