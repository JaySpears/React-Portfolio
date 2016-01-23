//Import Dependencies.
import React, { Component } from 'react';

//Import component modules.
import FooterLinks from './FooterLinks.jsx';
import FooterCopyright from './FooterCopyright.jsx';

//Import Styles.
import styles from './footer.scss';

//Export Modules.
export default

//Creating global navigation element.
class Footer extends Component {
    render(){
        return (
            <footer className="clearfix">
                <div className="container">
                    <FooterLinks />
                    <FooterCopyright />
                </div>
            </footer>
        );
    }
}
