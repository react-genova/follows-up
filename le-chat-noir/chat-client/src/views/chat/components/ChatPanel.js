import React from 'react';
import PropTypes from 'prop-types';
import * as Chat from '../../../modules/chat';
import UserInput from './UserInput';

const getStatusComponent = (status, onConnect, onDisconnect) => {
    switch(status) {
        case Chat.CHAT_STATUS_DISCONNECTED: return <button style={{flex: '-1', marginLeft: '10px', padding: '5px 10px', fontSize: '20px'}} onClick={onConnect}>Connect</button>;
        case Chat.CHAT_STATUS_CONNECTED: return <button style={{flex: '-1',padding: '5px 10px', fontSize: '20px'}} onClick={onDisconnect}>Disconnect</button>;
        case Chat.CHAT_STATUS_CONNECT: return <span style={{fontSize: '20px'}}>Connecting...</span>;
        case Chat.CHAT_STATUS_DISCONNECT:
        default: return <span style={{fontSize: '20px'}}>Disconnecting...</span>;
    }
}; 

const ChatPanel = ({user, status, onUserChange, onConnect, onDisconnect}) => (
    <div style={{paddingBottom: '10px', display: 'flex', flexDirection: 'row'}}>
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