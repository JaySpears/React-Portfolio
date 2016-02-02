//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from './resume.scss';

//Export Modules.
export default

class PrintResume extends Component {
    render(){
        return(
            <div className="print-resume-wrapper">
                <div><a href="#">Print Resume</a></div>
            </div>
        )
    }
}
