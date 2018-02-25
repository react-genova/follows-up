import React from 'react';
import PropTypes from 'prop-types';
import * as Chat from '../../../modules/chat';
import UserInput from './UserInput';

const getStatusComponent = (status, onConnect, onDisconnect) => {
    switch(status) {
        case Chat.CHAT_STATUS_DISCONNECTED: return <button onClick={onConnect}>Connect</button>;
        case Chat.CHAT_STATUS_CONNECTED: return <button onClick={onDisconnect}>Disconnect</button>;
        case Chat.CHAT_STATUS_CONNECT: return <span>Connecting...</span>;
        case Chat.CHAT_STATUS_DISCONNECT:
        default: return <span>Disconnecting...</span>;
    }
}; 

const ChatPanel = ({user, status, onUserChange, onConnect, onDisconnect}) => (
    <div>
        {
            status===Chat.CHAT_STATUS_DISCONNECTED
            ? <UserInput user={user} onUserChange={onUserChange} />
            : null 
        }
        { getStatusComponent(status, onConnect, onDisconnect) }
    </div>
);

ChatPanel.propTypes = {
    user: PropTypes.string, 
    status: PropTypes.number, 
    onUserChange: PropTypes.func, 
    onConnect: PropTypes.func, 
    onDisconnect: PropTypes.func,
};

export default ChatPanel;