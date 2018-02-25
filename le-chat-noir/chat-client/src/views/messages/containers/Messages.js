import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Messages from '../components/Messages';
import { getMessages } from '../../../modules/messages';
import { getChatUser } from '../../../modules/chat';

const MessagesContainer = ({messages}) => (
    <Messages messages={messages} />
)

MessagesContainer.propTypes = {
    messages: PropTypes.array,
    user: PropTypes.string,
};

const mapStateToProps = state => ({
    user: getChatUser(state),
    messages: getMessages(state)
});

export { MessagesContainer };
export default connect(mapStateToProps)(MessagesContainer);