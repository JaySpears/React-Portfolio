//Import Dependencies.
import React from 'react';
import { Router, Route } from 'react-router'
import ReactDOM from 'react-dom';

//Import Components.
import AboutElement from '../views/about/about.jsx';
import WorkElement from '../views/work/work.jsx';

//Set up routes.
let routes = (
    <Router>
        <Route path='/' component={AboutElement}/>
        <Route path='/work' component={WorkElement}/>
    </Router>
);

export default routes;
