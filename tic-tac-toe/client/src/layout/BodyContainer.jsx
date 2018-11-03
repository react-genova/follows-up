import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardLayout from './BoardLayout';
import Board from '../board/containers/BoardContainer';
import GameModeSelection from '../settings/containers/GameMode';
import { isGameIdle } from '../game/modules/engine/selectors';

const BodyContainer = ({ gameIdle }) => {
    if (gameIdle) {
        return <GameModeSelection />;
    }
    return (
        <BoardLayout>
            <Board />
        </BoardLayout>
    );
};

BodyContainer.propTypes = {
    gameIdle: PropTypes.bool,
};

BodyContainer.defaultProps = {
    gameIdle: false,
};

export const mapStatetoProps = state => ({
    gameIdle: isGameIdle(state),
});

export { BodyContainer };
export default connect(mapStatetoProps)(BodyContainer);
