//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from '../resume.scss';

//Export Modules.
export default

class Sq1 extends Component {
    render(){
        return(
            <div className="job-container">
                <div className="job-description clearfix">
                    <div className="job-title-mobile-wrapper">
                        <p className="job-title">Jr. Front End Engineer</p>
                        <p className="separator">/</p>
                        <p className="job-company">Sq1</p>
                    </div>
                    <p className="job-timeline">Apr 2015 - Dec 2015</p>
                </div>
                <div className="job-responsibilities">
                    <p>Responsibilities</p>
                    <ul>
                        <li>Architecturally structure responsive websites from scratch using HTML, CSS, SASS, and JavaScript.</li>
                        <li>Reconstruct previously built responsive websites based on client request via creative assets.</li>
                        <li>Engineer and maintain mobile applications.</li>
                        <li>Produce responsive, dynamic landing pages.</li>
                        <li>Implement technologies to improve development process. For example: Github, Grunt, NPM, Bower, Capistrano.</li>
                        <li>Construct with third party libraries such as jQuery, Bootstrap, Zurb Foundation, and Bourbon Neat.</li>
                        <li>Maintain client data via database: MySQL.</li>
                        <li>Sustain weekly maintenance and deliveries for client websites.</li>
                        <li>Ability to work with responsive PSD’s provided by creative departments.</li>
                        <li>Discuss architecture structure of websites with the creative department to produce web responsive PSD's.</li>
                        <li>Collaborate with Project Management to understand project process, and deadlines.</li>
                        <li>Assemble and construct dynamic websites via CMS: WordPress, Joomla.</li>
                        <li>Pursue together with the Quality Assurance department to find and fix website bugs.</li>
                    </ul>
                </div>
            </div>
        )
    }
}
