import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardLayout from './BoardLayout';
import Board from '../board/containers/BoardContainer';
import GameModeSelection from '../settings/containers/GameMode';
import { isGameStarted } from '../game/engine/selectors';

const BodyContainer = ({ gameStarted }) => {
    if (gameStarted) {
        return (
            <BoardLayout>
                <Board />
            </BoardLayout>
        );
    }
    return <GameModeSelection />;
};

BodyContainer.propTypes = {
    gameStarted: PropTypes.bool,
};

BodyContainer.defaultProps = {
    gameStarted: false,
};

export const mapStatetoProps = state => ({
    gameStarted: isGameStarted(state),
});

export { BodyContainer };
export default connect(mapStatetoProps)(BodyContainer);
