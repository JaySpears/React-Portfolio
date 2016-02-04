import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from '../resume.scss';

//Import Resume Components.
import Ansira from './jobs/ansira.jsx';
import Sq1 from './jobs/sq1.jsx';

//Export Modules.
export default

class ResumeJobs extends Component {
    render(){
        return (
            <div>
                <div className="header-wrapper">
                    <h2>Experience</h2>
                </div>
                <Ansira />
                <Sq1 />
            </div>
        );
    }
}
