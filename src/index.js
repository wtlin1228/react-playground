import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureAppStore, { sagaMiddleware } from './store';
import rootSaga from './sagas';
import Routes from './Routes';

// Global stylesheets
import './stylesheets/application.scss';
import './index.css';

import * as serviceWorker from './serviceWorker';

const store = configureAppStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
