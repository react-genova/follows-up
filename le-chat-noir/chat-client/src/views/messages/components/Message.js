import React from 'react';
import PropTypes from 'prop-types';

const pad2 = text => ('00'+text).substring(('00'+text).length-2);

const Message = ({text, sender, date}) => (
    <div style={{padding: '10px'}}>
        <div style={{color: 'lightGray'}}>
            <span>{pad2(new Date(date).getHours())}:{pad2(new Date(date).getMinutes())} </span><span>{sender}</span>
        </div>
        <div>{text}</div>
    </div>
);

Message.propTypes = {
    text: PropTypes.string,
    sender: PropTypes.string,
    date: PropTypes.number,
};

export default Message;