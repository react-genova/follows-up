import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { beginGame } from '../modules/engine/action.creators';

const MenuContainer = ({ fireBeginGame }) => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Button text="Play again" onClick={fireBeginGame} />
    </div>
);

MenuContainer.propTypes = {
    fireBeginGame: PropTypes.func,
};

MenuContainer.defaultProps = {
    fireBeginGame: undefined,
};

export const mapDispathToProps = {
    fireBeginGame: beginGame,
};

export { MenuContainer };
export default connect(null, mapDispathToProps)(MenuContainer);
