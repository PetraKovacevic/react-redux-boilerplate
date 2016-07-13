import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './pages/app';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);
