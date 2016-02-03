//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from '../../resume.scss';

//Export Modules.
export default

class Sq1 extends Component {
    render(){
        return(
            <div className="job-container">
                <div className="job-description clearfix">
                    <div className="job-title-mobile-wrapper">
                        <p className="job-title">Web Development Internship</p>
                        <p className="separator">/</p>
                        <p className="job-company">Sq1</p>
                    </div>
                    <p className="job-timeline">Sept 2014 - Apr 2015</p>
                </div>
                <div className="job-responsibilities">
                    <p>Responsibilities</p>
                    <ul>
                        <li>Bullet One</li>
                        <li>Bullet Two</li>
                        <li>Bullet Three</li>
                    </ul>
                </div>
            </div>
        )
    }
}
