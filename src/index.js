import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import App from './containers/App/index.js'

const renderDom = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
}
renderDom(App);

if (module.hot) {
    module.hot.accept('./containers/App/index.js', () => {
        const App = require('./containers/App/index.js').default;
        renderDom(App);
    })
}