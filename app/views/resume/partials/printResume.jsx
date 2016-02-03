//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from '../resume.scss';

//Export Modules.
export default

class PrintResume extends Component {
    printResume(){
        window.print();
    }
    render(){
        return(
            <div className="print-resume-wrapper">
                <div onClick={this.printResume}>Print Resume</div>
            </div>
        )
    }
}
