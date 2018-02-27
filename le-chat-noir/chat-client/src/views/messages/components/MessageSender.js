import React from 'react';
import PropTypes from 'prop-types';

const MessageSender = ({text, onTextChange, onSend}) => (
    <div style={{paddingTop: '10px', display: 'flex', flexDirection: 'row'}}>
        <input  style={{flex: '1', backgroundColor: 'black', color: 'white', padding: '5px 10px', fontSize: '20px'}} type="text" value={text} onChange={onTextChange} />
        <button style={{flex: '-1', marginLeft: '10px', padding: '5px 10px', fontSize: '20px'}} onClick={onSend}>Send</button>
    </div>
);

MessageSender.propTypes = {
    text: PropTypes.string,
    onSend: PropTypes.func,
    onTextChange: PropTypes.func,
};

export default MessageSender;