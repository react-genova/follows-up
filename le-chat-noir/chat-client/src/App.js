import React, { Component } from 'react';

import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ChatPanel from './views/chat';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ChatPanel />
        </div>
      </Provider>
      );
  }
}

export default App;
