//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import ContainerStyles from './container.scss';

//Export Modules.
export default

class Container extends Component {
    render(){
        return(
            <div className="page-container">
                {this.props.children}
            </div>
        )
    }
}
