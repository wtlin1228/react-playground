import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { history } from './store';

function App() {
  return <div>App</div>;
}

function About() {
  return <div>About</div>;
}

export const routes = [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/about',
    component: About
  }
];

const Routes = () => (
  <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
);

export default Routes;
