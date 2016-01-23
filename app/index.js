//Import Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'

//Import Routes.
import routes from './routes/routes.js';

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('application'))
