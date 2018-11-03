import React from 'react';
import { connect } from 'react-redux';
import GamesHistory from '../components/GamesHistory';
import {
    getPlayer1Name, getPlayer2Name, getPlayer1Symbol, getPlayer2Symbol,
} from '../../settings/modules/selectors';
import { getTotalPlayer1Victories, getTotalPlayer2Victories, getTotalDraws } from '../modules/engine/selectors';

export const GameHistoryContainer = props => <GamesHistory {...props} />;

export const mapStateToProps = state => ({
    player1name: getPlayer1Name(state),
    player2name: getPlayer2Name(state),
    player1score: getTotalPlayer1Victories(state),
    player2score: getTotalPlayer2Victories(state),
    player1sign: getPlayer1Symbol(state),
    player2sign: getPlayer2Symbol(state),
    draws: getTotalDraws(state),

});

export default connect(mapStateToProps)(GameHistoryContainer);
