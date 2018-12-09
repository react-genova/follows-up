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
import { GameModeContainer, Separator } from './GameMode.styled';

class GameMode extends Component {
    invokeUpdate = (player1type, player2type) => () => {
        const { updatePlayers: updatePlayersAction } = this.props;
        updatePlayersAction(player1type, SIGN_O, 'Player 1', player2type, SIGN_X, 'Player 2');
    }

    render() {
        return (
            <GameModeContainer>
                <PlayersSelector className="game-human-machine" onClick={this.invokeUpdate(PLAYER_TYPE_HUMAN, PLAYER_TYPE_MACHINE)}>
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
                <Separator />
                <PlayersSelector className="game-machine-machine" onClick={this.invokeUpdate(PLAYER_TYPE_MACHINE, PLAYER_TYPE_MACHINE)}>
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
                <Separator />
                <PlayersSelector className="game-human-human" onClick={() => null}>
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
            </GameModeContainer>
        );
    }
}

GameMode.propTypes = {
    updatePlayers: PropTypes.func,
};

GameMode.defaultProps = {
    updatePlayers: undefined,
};

const mapDispatchToProps = {
    updatePlayers,
};

export { GameMode };
export default connect(null, mapDispatchToProps)(GameMode);
