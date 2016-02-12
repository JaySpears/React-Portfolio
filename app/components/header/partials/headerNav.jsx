//Import Dependencies.
import React, { Component } from 'react';
import { Link } from 'react-router';

//Import Styles.
import styles from '../header.scss';

//Export Modules.
export default

class HeaderNav extends Component {
    render(){
        return(
            <div className="navigation-wrapper">
                <nav>
                    <ul className="navigation clearfix">
                        <li><Link to="/">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }

}
