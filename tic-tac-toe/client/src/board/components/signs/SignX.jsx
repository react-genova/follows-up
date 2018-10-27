import React from 'react';
import PropTypes from 'prop-types';

const SignX = ({ ghost }) => (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" stroke={ghost ? 'lightgray' : 'cyan'} strokeWidth="8" />
        <line x1="0" y1="100" x2="100" y2="0" stroke={ghost ? 'lightgray' : 'cyan'} strokeWidth="8" />
    </svg>
);

SignX.propTypes = {
    ghost: PropTypes.bool,
};

SignX.defaultProps = {
    ghost: false,
};


export default SignX;
