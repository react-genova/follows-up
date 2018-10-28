import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Human from '../components/Human';
import Versus from '../components/Versus';
import Machine from '../components/Machine';
import PlayersSelector from '../components/PlayersSelector';
import { SIGN_O, SIGN_X } from '../../board/modules/types/signs.constants';
import { PLAYER_TYPE_HUMAN, PLAYER_TYPE_MACHINE } from '../modules/types/player.types.constants';
import { updatePlayers } from '../modules/action.creators';

class GameMode extends Component {
    invokeUpdate = (player1type, player2type) => () => {
        const { updatePlayers: updatePlayersAction } = this.props;
        updatePlayersAction(player1type, SIGN_O, 'Player 1', player2type, SIGN_X, 'Player 2');
    }

    onHumanVsMachineClick = this.invokeUpdate(PLAYER_TYPE_HUMAN, PLAYER_TYPE_MACHINE);

    onMachineVsMachineClick = this.invokeUpdate(PLAYER_TYPE_MACHINE, PLAYER_TYPE_MACHINE);

    // NOT IMPLEMENTED this.invokeUpdate(PLAYER_TYPE_HUMAN, PLAYER_TYPE_HUMAN);
    onHumanVsHumanClick = () => null;

    render() {
        return (
            <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <PlayersSelector onClick={this.onHumanVsMachineClick}>
                    {
                        color => (
                            <Fragment>
                                <Human color={color} />
                                <Versus color={color} />
                                <Machine color={color} />
                            </Fragment>
                        )
                    }
                </PlayersSelector>
                <div style={{ marginTop: '20px', width: '45em', height: '2px', backgroundColor: '#909090' }} />
                <PlayersSelector onClick={this.onMachineVsMachineClick}>
                    {
                        color => (
                            <Fragment>
                                <Machine color={color} />
                                <Versus color={color} />
                                <Machine color={color} />
                            </Fragment>
                        )
                    }
                </PlayersSelector>
                <div style={{ marginTop: '20px', width: '45em', height: '2px', backgroundColor: '#909090' }} />
                <PlayersSelector onClick={this.onHumanVsHumanClick}>
                    {
                        color => (
                            <Fragment>
                                <Human color={color} />
                                <Versus color={color} />
                                <Human color={color} />
                            </Fragment>
                        )
                    }
                </PlayersSelector>
            </div>
        );
    }
}

GameMode.propTypes = {
    updatePlayers: PropTypes.func,
};

GameMode.defaultProps = {
    updatePlayers: () => null,
};

const mapDispatchToProps = {
    updatePlayers,
};

export { GameMode };
export default connect(null, mapDispatchToProps)(GameMode);
