import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from 'reducers';

// Replace createHashHistory with createBrowserHistory
// if you want to remove # in the url
export const history = createHashHistory();
export const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer(history),
    middleware: [routerMiddleware(history), sagaMiddleware],
    preloadedState,
    enhancers: []
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
