import React from 'react';
import PropTypes from 'prop-types';

const MessageSender = ({text, onTextChange, onSend}) => (
    <div style={{flex: '1'}}>
        <input type="text" value={text} onChange={onTextChange} />
        <button onClick={onSend}>Send</button>
    </div>
);

MessageSender.propTypes = {
    text: PropTypes.string,
    onSend: PropTypes.func,
    onTextChange: PropTypes.func,
};

export default MessageSender;