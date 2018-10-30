import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import * as SIGNS from '../../modules/types/signs.constants';
import SignContainer from './Signs.styled';
import SignO from './SignO';
import SignX from './SignX';
import { playingTypePropTypes } from '../grid/Grid.types';

const Sign = ({ type, hasValue, onClick }) => {
    const [hover, setHover] = useState(false);
    return (
        <SignContainer
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {
                (hasValue || hover) && {
                    [SIGNS.SIGN_O]: <SignO ghost={!hasValue} />,
                    [SIGNS.SIGN_X]: <SignX ghost={!hasValue} />,
                }[type]
            }
        </SignContainer>
    );
};

Sign.propTypes = {
    hasValue: PropTypes.bool,
    onClick: PropTypes.func,
    type: playingTypePropTypes,
};

Sign.defaultProps = {
    hasValue: false,
    onClick: undefined,
    type: SIGNS.SIGN_O,
};

export default memo(Sign);
