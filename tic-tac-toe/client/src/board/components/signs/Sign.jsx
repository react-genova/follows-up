import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as SIGNS from '../../modules/types/signs.constants';
import SignContainer from './Signs.styled';
import SignO from './SignO';
import SignX from './SignX';

class Sign extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
        }
    }

    onMouseEnter = () => this.setState({ hover: true });

    onMouseLeave = () => this.setState({ hover: false });

    onClick = () => this.props.onClick(this.props.type);

    render() {
        const { type, hasValue } = this.props;
        const { hover } = this.state;
        return (
            <SignContainer onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
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
    type: PropTypes.oneOf([SIGNS.SIGN_O, SIGNS.SIGN_X]),
};

Sign.defaultProps = {
    hasValue: false,
    onClick: () => null,
    type: SIGNS.SIGN_O,
};

export default Sign;
