import React from 'react';
import PropTypes from 'prop-types';

const SignO = ({ ghost }) => (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
        <ellipse cx="50" cy="50" rx="46" ry="46" fill="transparent" stroke={ghost ? 'lightgray' : 'yellow'} strokeWidth="8" />
    </svg>
);

SignO.propTypes = {
    ghost: PropTypes.bool,
};

SignO.defaultProps = {
    ghost: false,
};

export default SignO;
