//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from '../../resume.scss';

//Export Modules.
export default

class Ansira extends Component {
    render(){
        return(
            <div className="job-container">
                <div className="job-description clearfix">
                    <div className="job-title-mobile-wrapper">
                        <p className="job-title">Jr. Front End Engineer</p>
                        <p className="separator">/</p>
                        <p className="job-company">Ansira</p>
                    </div>
                    <p className="job-timeline">Apr 2015 - Present</p>
                </div>
                <div className="job-responsibilities">
                    <p>Responsibilities</p>
                    <ul>
                        <li>Create project structure of responsive websites from scratch using HTML, CSS (SASS), and JavaScript.</li>
                        <li>Reconstruct previously built responsive websites based on client request via creative assets.</li>
                        <li>Develop and maintain mobile applications.</li>
                        <li>Produce responsive, dynamic landing pages.</li>
                        <li>Implement technologies to improve development process. For example: Github, Grunt, NPM, Bower, Capistrano.</li>
                        <li>Use third party libraries such as jQuery, Bootstrap, Zurb Foundation, and Bourbon Neat.</li>
                        <li>Create and maintain client databases (MySQL).</li>
                        <li>Deliver weekly maintenance fixes to client web properties.</li>
                        <li>Ability to work with responsive PSDs provided by the creative department.</li>
                        <li>Discuss structure of websites with the creative department to produce web responsive PSDs.</li>
                        <li>Collaborate with Project Management to understand project process and deadlines.</li>
                        <li>Assemble and construct dynamic websites via a CMS (WordPress/Joomla).</li>
                        <li>Work together with Quality Assurance (QA) to find and fix website bugs.</li>
                    </ul>
                </div>
            </div>
        )
    }
}
