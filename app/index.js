//Import Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const browserHistory = createBrowserHistory();

//Import Routes.
import routes from './routes/routes.js';

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('application'))
