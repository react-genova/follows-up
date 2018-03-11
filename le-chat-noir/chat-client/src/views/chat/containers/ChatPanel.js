import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatPanel from '../components/ChatPanel';
import { 
    changeChatStatus, disconnectChat, connectChat, 
    getChatServer, getChatStatus, getChatUser,
} from '../../../modules/chat';

class ChatPanelContainer extends Component {

    changeUser = ({target: {value}}) => {
        const { changeChatStatus, status } = this.props;
        changeChatStatus(status, value);
    }

    connect = () => {
        const { connectChat } = this.props;
        connectChat();
    }

    disconnect = () => {
        const { disconnectChat } = this.props;
        disconnectChat();
    }

    render() {
        const { user, status } = this.props;
        return (
            <ChatPanel 
                user={user}
                status={status}
                onUserChange={this.changeUser}
                onConnect={this.connect}
                onDisconnect={this.disconnect}
            />
        );
    }

}
ChatPanelContainer.propTypes = {
    user: PropTypes.string,
    server: PropTypes.string,
    status: PropTypes.number,

    changeChatStatus: PropTypes.func, 
    disconnectChat: PropTypes.func, 
    connectChat: PropTypes.func, 
};

const mapStateToProps = state => ({
    user: getChatUser(state),
    server: getChatServer(state),
    status: getChatStatus(state),
});

export { ChatPanelContainer };
export default connect(mapStateToProps, { changeChatStatus, disconnectChat, connectChat })(ChatPanelContainer);