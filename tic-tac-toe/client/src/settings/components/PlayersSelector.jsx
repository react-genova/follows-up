import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlayersSelectorStyled from './PlayersSelector.styled';

const PlayersSelector = ({ children, className, onClick }) => {
    const [hover, setHover] = useState(false);
    const onMouseEnter = useMemo(() => () => setHover(true), []);
    const onMouseLeave = useMemo(() => () => setHover(false), []);
    return (
        <PlayersSelectorStyled
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children(hover ? '#E0E0E0' : '#909090')}
        </PlayersSelectorStyled>
    );
};

PlayersSelector.propTypes = {
    children: PropTypes.func.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

PlayersSelector.defaultProps = {
    onClick: undefined,
    className: undefined,
};

export default PlayersSelector;
