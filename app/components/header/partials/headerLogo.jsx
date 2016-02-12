//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import styles from '../header.scss';

//Export Modules.
export default

class HeaderLogo extends Component {
    render(){
        const logo = '<JS />'
        return(
            <div className="logo">
                <p>{logo}</p>
            </div>
        )
    }
}
