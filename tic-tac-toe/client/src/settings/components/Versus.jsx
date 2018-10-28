import React from 'react';
import PropTypes from 'prop-types';

const Versus = ({ color }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '15em', justifyContent: 'center' }}>
        <span style={{ fontSize: '3em', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif', color }}>VS</span>
    </div>
);

Versus.propTypes = {
    color: PropTypes.string,
};

Versus.defaultProps = {
    color: '#909090',
};

export default Versus;
