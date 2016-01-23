//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import styles from './footer.scss';

//Export Modules.
export default

class FooterCopyright extends Component {
    render(){
        return(
            <div>
                <p>&copy; 2016 - Josh Spears | Powered by <a href="https://facebook.github.io/react/">ReactJS</a>.</p>
            </div>
        )
    }
}
