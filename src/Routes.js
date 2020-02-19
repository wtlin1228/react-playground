import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { history } from './store';

import App from 'pages/App';

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
