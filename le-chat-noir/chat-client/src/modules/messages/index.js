import { createSelector } from 'reselect';

// ACTIONS
export const ADD_MESSAGE = 'ADD_MESSAGE@messages';
export const SEND_MESSAGE = 'SEND_MESSAGE@messages';
export const addMessage = ({text, sender, date}) => ({
    type: ADD_MESSAGE,
    payload: { text, sender, date }
});

export const sendMessage = (text, sender) => ({
    type: SEND_MESSAGE,
    payload: { text, sender }
});

// SELECTORS
const getRoot = state => state.messages;
export const getMessages = createSelector([getRoot], root => root.messages);

// REDUCER
const initialState = {
    messages: []
};

const messages = (state=initialState, action={}) => {
    const { type, payload } = action;
    switch(type) {
        case ADD_MESSAGE: return { messages: [ ...state.messages, { ...payload }] }
        default: return state;
    }
}

export default messages;