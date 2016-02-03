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
                        <p className="separator">=></p>
                        <p className="job-company">Sq1</p>
                    </div>
                    <p className="job-timeline">Sept 2014 - Apr 2015</p>
                </div>
                <div className="job-responsibilities">
                    <p>Responsibilities:</p>
                    <ul>
                        <li>Worked with a third party Ecommerce company to build a dynamic and responsive website.</li>
                        <li>Study and write HMTL, CSS, JavaScript up to 30 hours a week.</li>
                        <li>Shadow senior developers as they architecturally build client web applications.</li>
                        <li>Learn and practice a version control management system (Git).</li>
                        <li>Helped develop responsive websites, and mobile applications via PSDs.</li>
                    </ul>
                </div>
            </div>
        )
    }
}
