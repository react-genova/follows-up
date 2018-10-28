import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as SIGNS from '../../modules/types/signs.constants';
import SignContainer from './Signs.styled';
import SignO from './SignO';
import SignX from './SignX';
import { playingTypePropTypes } from '../grid/Grid.types';

class Sign extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
        };
    }

    onMouseEnter = () => this.setState({ hover: true });

    onMouseLeave = () => this.setState({ hover: false });

    onClickCallback = () => {
        const { onClick, type } = this.props;
        onClick(type);
    }

    render() {
        const { type, hasValue } = this.props;
        const { hover } = this.state;
        return (
            <SignContainer onClick={this.onClickCallback} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                {
                    (hasValue || hover) && {
                        [SIGNS.SIGN_O]: <SignO ghost={!hasValue} />,
                        [SIGNS.SIGN_X]: <SignX ghost={!hasValue} />,
                    }[type]
                }
            </SignContainer>
        );
    }
}

Sign.propTypes = {
    hasValue: PropTypes.bool,
    onClick: PropTypes.func,
    type: playingTypePropTypes,
};

Sign.defaultProps = {
    hasValue: false,
    onClick: () => null,
    type: SIGNS.SIGN_O,
};

export default Sign;
