import React from 'react';
import PropTypes from 'prop-types';
// import Human from '../../settings/components/Human';
// import Machine from '../../settings/components/Machine';
import { SIGN_X, SIGN_O } from '../../board/modules/types/signs.constants';
import GamesHistorySign from './GamesHistory.sign';
import {
    Results, Row, Name, Score, Table, Title, Wrapper,
} from './GamesHistory.styled';

const GamesHistory = ({
    player1name, player2name, player1score, player2score, player1sign, player2sign, draws,
}) => (
    <Wrapper>
        <Title>GAME HISTORY</Title>
        <Table>
            <Results>
                <Row>
                    <GamesHistorySign type={player1sign} width="5em" />
                    {/* <Human showType={false} thumbSize="2.5em" /> */}
                    <Name>{`${player1name} victories`}</Name>
                    <Score>{player1score}</Score>
                </Row>
                <Row>
                    <GamesHistorySign type={player2sign} width="5em" />
                    {/* <Machine showType={false} thumbSize="2.5em" /> */}
                    <Name>{`${player2name} victories`}</Name>
                    <Score>{player2score}</Score>
                </Row>
                <Row>
                    <GamesHistorySign type={player1sign} />
                    <GamesHistorySign type={player2sign} />
                    <Name>Draws</Name>
                    <Score>{draws}</Score>
                </Row>
            </Results>
            <Row justifyContent="flex-end">
                <Score>{draws + player1score + player2score}</Score>
            </Row>
        </Table>
    </Wrapper>
);

GamesHistory.propTypes = {
    player1name: PropTypes.string,
    player2name: PropTypes.string,
    player1score: PropTypes.number,
    player2score: PropTypes.number,
    player1sign: PropTypes.oneOf([SIGN_X, SIGN_O]),
    player2sign: PropTypes.oneOf([SIGN_X, SIGN_O]),
    draws: PropTypes.number,
};

GamesHistory.defaultProps = {
    player1name: 'Player 1',
    player2name: 'Player 2',
    player1score: 0,
    player2score: 0,
    player1sign: SIGN_X,
    player2sign: SIGN_O,
    draws: 0,
};

export default GamesHistory;
