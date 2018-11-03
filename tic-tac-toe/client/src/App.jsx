import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './layout/Layout';
import Title from './layout/Title';
import BodySelection from './layout/BodyContainer';

const App = () => (
    <Provider store={store}>
        <Layout>
            <Title />
            <BodySelection />
        </Layout>
    </Provider>
);

export default App;
