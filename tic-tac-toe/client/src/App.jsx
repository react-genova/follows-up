import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './layout/Layout';
import BoardContainer from './board/containers/BoardContainer';
import BoardLayout from './layout/BoardLayout';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <BoardLayout>
                        <BoardContainer />
                    </BoardLayout>
                </Layout>
            </Provider>
        );
    }
}

export default App;
