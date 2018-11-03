import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = ({ text, onClick }) => (
    <StyledButton type="button" onClick={onClick}>{text}</StyledButton>
);

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: '',
    onClick: undefined,
};

export default Button;
