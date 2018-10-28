import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '../components/grid/Grid';
import { getPlayer1Symbol } from '../../settings/modules/selectors';
import { getBoardValues } from '../modules/selectors';
import { addBoardMove } from '../modules/action.creators';
import { valuesPropTypes, playingTypePropTypes } from '../components/grid/Grid.types';

class BoardContainer extends Component {
    onCellClick = (index) => {
        const { values, playingType } = this.props;
        if (!values[index].valid) {
            const { addBoardMove: fireAddBoardMove } = this.props;
            fireAddBoardMove(index, playingType);
        }
    }

    render() {
        const { values, playingType } = this.props;
        return (<Grid values={values} playingType={playingType} onCellClick={this.onCellClick} />);
    }
}

BoardContainer.propTypes = {
    addBoardMove: PropTypes.func,
    playingType: playingTypePropTypes.isRequired,
    values: valuesPropTypes.isRequired,
};

BoardContainer.defaultProps = {
    addBoardMove: () => null,
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
