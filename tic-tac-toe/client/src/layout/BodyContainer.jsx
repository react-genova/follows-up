import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardLayout from './BoardLayout';
import Board from '../board/containers/BoardContainer';
import GameHistory from '../game/containers/GameHistoryContainer';
import GameModeSelection from '../settings/containers/GameMode';
import { isGameIdle } from '../game/modules/engine/selectors';
import Menu from '../game/containers/Menu';

const BodyContainer = ({ gameIdle }) => {
    if (gameIdle) {
        return <GameModeSelection />;
    }
    return (
        <BoardLayout>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <GameHistory />
                <Menu />
            </div>
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
