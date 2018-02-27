import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const Messages = ({messages}) => (
    <div style={{backgroundColor:'black', color: '#f4c56d', width: '100%', maxHeight: '500px', height: '500px', overflow: 'scroll'}}>
        <div>
        { 
            messages.map(({sender, text, date}) => <Message key={sender+date} text={text} sender={sender} date={date} />)
        }
        </div>
    </div>
);

Messages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string,
        text: PropTypes.stirng,
        date: PropTypes.number
    }))
};

export default Messages;