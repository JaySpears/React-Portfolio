//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import WorkStyles from './work.scss';

//Export Modules.
export default

class WorkDisclaimer extends Component {
    render(){
        return(
            <div className="clearfix">
                <p className="disclaimer"><span>*</span> Copyright disclaimer: I do NOT own these websites nor the images featured in them. All rights belong to it's rightful owner/owner's. No copyright infringement intended.</p>
            </div>
        )
    }
}
