import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ value, text, size, onChange, style }) => (
    <div style={{ display: 'flex', fontFamily: 'Arial, Helvetica, sans-serif', color: '#999', cursor: 'pointer', fontSize: size, ...style }} onClick={onChange}>
        <div style={{ border: '0.05em solid #999', borderRadius: '0.25em', width: '1em', height: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '0.85em', height: '0.85em', borderRadius: '0.25em', backgroundColor: value ? '#999' : 'transparent' }}/>
        </div>
        <span style={{ paddingLeft: text ? '0.25em' : '0'}}>{text}</span>
    </div>
);

Checkbox.propTypes = {
    value: PropTypes.bool,
    text: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.string,
    style: PropTypes.object,
};

Checkbox.defaultProps = {
    value: false,
    text: '',
    onChange: undefined,
    size: '1em',
    style: {},
};

export default Checkbox;
