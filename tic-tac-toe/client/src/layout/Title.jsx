import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ color }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '5em', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif', color }}>TIC TAC TOE</span>
    </div>
);

Title.propTypes = {
    color: PropTypes.string,
};

Title.defaultProps = {
    color: '#E0E0E0',
};

export default Title;
