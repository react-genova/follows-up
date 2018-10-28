import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardLayout from './BoardLayout';
import Board from '../board/containers/BoardContainer';
import GameModeSelection from '../settings/containers/GameMode';
import { getPlayer1Ready, getPlayer2Ready } from '../settings/modules/selectors';

const BodyContainer = ({ playersReady }) => {
    if (playersReady) {
        return (
            <BoardLayout>
                <Board />
            </BoardLayout>
        );
    }
    return <GameModeSelection />;
};

BodyContainer.propTypes = {
    playersReady: PropTypes.bool,
};

BodyContainer.defaultProps = {
    playersReady: false,
};

const mapStatetoProps = state => ({
    playersReady: getPlayer1Ready(state) && getPlayer2Ready(state),
});

export { BodyContainer };
export default connect(mapStatetoProps)(BodyContainer);
