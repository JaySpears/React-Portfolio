//Import Dependencies.
import React from 'react';
import { Router, Route } from 'react-router'
import ReactDOM from 'react-dom';

//Import Components.
import AboutElement from '../views/about/about.jsx';
import WorkElement from '../views/work/work.jsx';
import ResumeElement from '../views/resume/resume.jsx';


//Set up routes.
let routes = (
    <Router>
        <Route path='/' component={WorkElement}/>
        <Route path='/about' component={AboutElement}/>
        <Route path='/resume' component={ResumeElement}/>
    </Router>
);

export default routes;
