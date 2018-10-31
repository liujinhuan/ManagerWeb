import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import 'babel-polyfill';
import App from './containers/index'
import Routes from './routers/index'
import store from './store/index'
import './styles/reset.less'

const renderDom = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <BrowserRouter>
                    <Component > 
                        <Routes></Routes>   
                    </Component>
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
}
renderDom(App);

if (module.hot) {
    module.hot.accept('./routers/index', () => {
        const App = require('./routers/index').default;
        renderDom(App);
    })
}