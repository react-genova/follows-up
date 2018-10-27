import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../components/grid/Grid';
import { getPlayer1Symbol } from '../../settings/modules/selectors';
import { getBoardValues } from '../modules/selectors';
import { addBoardMove } from '../modules/action.creators';

class BoardContainer extends Component {
    onCellClick = (index, type, hasPreviousValue) => {
        if (!hasPreviousValue) {
            const { addBoardMove } = this.props;
            addBoardMove(index, type);
        }
    }

    render() {
        const { values, playingType} = this.props;
        return (<Grid values={values} playingType={playingType} onCellClick={this.onCellClick} />);
    }
};

export const mapStateToProps = state => ({
    values: getBoardValues(state),
    playingType: getPlayer1Symbol(state),
});

export const mapDispatchToProps = {
    addBoardMove,
};

export { BoardContainer };
export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
