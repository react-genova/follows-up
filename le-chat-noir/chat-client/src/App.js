import React, { Component } from 'react';

import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ChatPanel from './views/chat';
import { MessageSender, Messages } from './views/messages';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div style={{width: '40%', flex: '1', height: '200px', maxHeight: '600px'}}>
            <ChatPanel />
            <Messages />
            <MessageSender />
          </div>
        </div>
      </Provider>
      );
  }
}
// <div style={{width: '45%', margin: '0 auto'}}>
export default App;
