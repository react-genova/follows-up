import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlayersSelectorStyled from './PlayersSelector.styled';

const PlayersSelector = ({ onClick, children }) => {
    const [hover, setHover] = useState(false);
    const onMouseEnter = useMemo(() => () => setHover(true), []);
    const onMouseLeave = useMemo(() => () => setHover(false), []);
    return (
        <PlayersSelectorStyled
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children(hover ? '#E0E0E0' : '#909090')}
        </PlayersSelectorStyled>
    );
};

PlayersSelector.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.func.isRequired,
};

PlayersSelector.defaultProps = {
    onClick: undefined,
};

export default PlayersSelector;
