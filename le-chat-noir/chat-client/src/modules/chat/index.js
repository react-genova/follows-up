import { createSelector } from 'reselect';

// CONSTANTS
export const CHAT_STATUS_DISCONNECTED = 0;
export const CHAT_STATUS_CONNECT = 1;
export const CHAT_STATUS_DISCONNECT = 2;
export const CHAT_STATUS_CONNECTED = 3;
export const CHAT_USER_NONE = "";

// ACTIONS
export const CHANGE_CHAT_STATUS = 'CHANGE_CHAT_STATUS@chat';
export const CONNECT_CHAT = 'CONNECT_CHAT@chat';
export const DISCONNECT_CHAT = 'DISCONNECT_CHAT@chat';
export const changeChatStatus = (status, user) => ({
    type: CHANGE_CHAT_STATUS,
    payload: {
        status,
        user
    }
});
export const connectChat = () => ({type: CONNECT_CHAT});
export const disconnectChat = () => ({type: DISCONNECT_CHAT});

// SELECTOR
const getChat = state => state.chat;
export const getChatStatus = createSelector([getChat], chat => chat.status);
export const getChatUser = createSelector([getChat], chat => chat.user);
export const getChatServer = createSelector([getChat], chat => chat.server);

// REDUCER
const initialState = {
    status: CHAT_STATUS_DISCONNECTED,
    user: CHAT_USER_NONE,
    server: 'http://localhost:45678',
};

const chat = (state=initialState, action={}) => {
    const { type, payload } = action;
    switch(type) {
        case CHANGE_CHAT_STATUS: return { ...state, ...payload }
        case CONNECT_CHAT: return { ...state, status: CHAT_STATUS_CONNECT }
        case DISCONNECT_CHAT: return { ...state, status: CHAT_STATUS_DISCONNECTED }
        
        default: return state;
    } 
}

export default chat;