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
            <div>
                <nav>
                    <ul className="navigation clearfix">
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/work">Projects</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }

}
