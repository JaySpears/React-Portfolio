//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from '../resume.scss';

//Export Modules.
export default

class PrintResume extends Component {
    printResume(){
        window.print(document.getElementsByClassName('page-container'));
    }
    render(){
        return(
            <div className="print-resume-wrapper">
                <div onClick={this.printResume}><a href="#">Print Resume</a></div>
            </div>
        )
    }
}
