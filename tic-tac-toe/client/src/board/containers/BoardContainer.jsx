import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '../components/grid/Grid';
import { getPlayer1Symbol } from '../../settings/modules/selectors';
import { getBoardValues, getWinningSequence } from '../modules/selectors';
import { addBoardMove } from '../modules/action.creators';
import { valuesPropTypes, playingTypePropTypes } from '../components/grid/Grid.types';
import { isGameStarted } from '../../game/modules/engine/selectors';

class BoardContainer extends Component {
    onCellClick = (index) => {
        const { values, playingType, gameStarted } = this.props;
        if (gameStarted && !values[index].valid) {
            const { addBoardMove: fireAddBoardMove } = this.props;
            fireAddBoardMove(index, playingType);
        }
    }

    render() {
        const { highlightSequence, values, playingType } = this.props;
        return (
            <div style={{ width: '800px', height: '800px' }}>
                <Grid
                    values={values}
                    playingType={playingType}
                    onCellClick={this.onCellClick}
                    highlightSequence={highlightSequence}
                />
            </div>);
    }
}

BoardContainer.propTypes = {
    addBoardMove: PropTypes.func,
    playingType: playingTypePropTypes.isRequired,
    values: valuesPropTypes.isRequired,
    gameStarted: PropTypes.bool.isRequired,
    highlightSequence: PropTypes.arrayOf(PropTypes.number).isRequired,
};

BoardContainer.defaultProps = {
    addBoardMove: undefined,
};

export const mapStateToProps = state => ({
    values: getBoardValues(state),
    playingType: getPlayer1Symbol(state),
    gameStarted: isGameStarted(state),
    highlightSequence: getWinningSequence(state),
});

export const mapDispatchToProps = {
    addBoardMove,
};

export { BoardContainer };
export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
