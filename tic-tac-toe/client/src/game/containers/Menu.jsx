import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { beginGame } from '../modules/engine/action.creators';
import { changeAutoplay } from '../../settings/modules/action.creators';
import { getAutoplay } from '../../settings/modules/selectors';
import Checkbox from '../components/Checkbox';

const MenuContainer = ({ autoplay, fireBeginGame, fireChangeAutoplay }) => {
    const switchAutoplay = useMemo(() => () => fireChangeAutoplay(!autoplay));
    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <Button text="Play again" onClick={fireBeginGame} />
                <Checkbox size="1.5em" text="Autoplay" value={autoplay} onChange={switchAutoplay} style={{ paddingTop: '0.2em'}} />
            </div>
        </div>
    );
};

MenuContainer.propTypes = {
    autoplay: PropTypes.bool,
    fireBeginGame: PropTypes.func,
    fireChangeAutoplay: PropTypes.func,
};

MenuContainer.defaultProps = {
    autoplay: false,
    fireBeginGame: undefined,
    fireChangeAutoplay: undefined,
};

export const mapStateToProps = state => ({
    autoplay: getAutoplay(state),
});

export const mapDispathToProps = {
    fireBeginGame: beginGame,
    fireChangeAutoplay: changeAutoplay,
};

export { MenuContainer };
export default connect(mapStateToProps, mapDispathToProps)(MenuContainer);
