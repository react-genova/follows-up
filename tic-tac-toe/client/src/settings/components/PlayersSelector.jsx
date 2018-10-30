import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlayersSelectorStyled from './PlayersSelector.styled';

const PlayersSelector = ({ onClick, children }) => {
    const [hover, setHover] = useState(false);
    return (
        <PlayersSelectorStyled
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
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
    onClick: () => null,
};

export default PlayersSelector;
