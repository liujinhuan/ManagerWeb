import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import App from './containers/index'
import Routes from './routers/index'

const renderDom = Component => {
    render(
        <AppContainer>
            <BrowserRouter>
                <Component > 
                    <Routes></Routes>   
                </Component>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('app')
    );
}
renderDom(App);

if (module.hot) {
    module.hot.accept('./containers/index', () => {
        const App = require('./containers/index').default;
        renderDom(App);
    })
}