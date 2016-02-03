//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import styles from '../header.scss';

//Export Modules.
export default

class HeaderLogo extends Component {
    render(){
        return(
            <div>
                <div className="portrait"></div>
                <p className="header-bio">
                    Jr. front-end engineer at <a href="http://ansira.com/">Ansira</a>.
                </p>
            </div>
        )
    }
}
