import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayersSelector extends Component {
    state = {
        hover: false,
    }

    onMouseEnter = () => this.setState({ hover: true });

    onMouseLeave = () => this.setState({ hover: false });

    render() {
        const { onClick, children } = this.props;
        const { hover } = this.state;
        return (
            <div onClick={onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {children(hover ? '#E0E0E0' : '#909090')}
            </div>
        );
    }
}

PlayersSelector.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.func.isRequired,
};

PlayersSelector.defaultProps = {
    onClick: () => null,
};

export default PlayersSelector;
