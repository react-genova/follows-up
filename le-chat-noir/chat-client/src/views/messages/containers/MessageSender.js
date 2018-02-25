import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageSender from '../components/MessageSender';
import { getChatUser } from '../../../modules/chat';
import { addMessage } from '../../../modules/messages';

class MessageSenderContainer extends Component {
    state = {
        text: ''
    };

    onSend = () => {
        const { sendMessage, sender } = this.props;
        const { text } = this.state;
        sendMessage(text, sender, new Date().getTime());
    };

    onTextChange = ({target: { value }}) => {
        this.setState({text: value});
    }

    render() {
        const { text } = this.state; 
        return (
            <MessageSender text={text} onTextChange={this.onTextChange} onSend={this.onSend} />
        );
    }
}

MessageSenderContainer.propTypes = {
    sender: PropTypes.string,
    sendMessage: PropTypes.func,
};

const mapStateToProps = state => ({
    sender: getChatUser(state)
});

export { MessageSenderContainer };
export default connect(mapStateToProps, { sendMessage: addMessage })(MessageSenderContainer);