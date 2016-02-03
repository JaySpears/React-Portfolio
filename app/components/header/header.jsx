//Import Dependencies.
import React, { Component } from 'react';

//Import component modules.
import HeaderNav from './partials/headerNav.jsx';
import HeaderLogo from './partials/headerLogo.jsx';

//Import Styles.
import styles from './header.scss';

//Export Modules.
export default

//Creating global navigation element.
class Header extends Component {
    render(){
        return (
            <header className="clearfix">
                <div className="container">
                    <HeaderLogo />
                    <HeaderNav />
                </div>
            </header>
        );
    }
}
