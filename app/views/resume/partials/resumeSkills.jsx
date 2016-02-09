import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from '../resume.scss';

//Import Resume Components.


//Export Modules.
export default

class ResumeSkills extends Component {
    render(){
        return (
            <div className="skills">
                <div className="header-wrapper">
                    <h2>Skills</h2>
                </div>
                <ul>
                    <li><b>Languages</b>: HTML (XHMTL, HTML5), CSS, SASS, JavaScript.</li>
                    <li><b>Vendor libraries</b>: jQuery, Bootstrap, Zurb Foundation, Bourbon Neat.</li>
                    <li><b>JavaScript libraries</b>: ReactJS.</li>
                    <li><b>Technologies</b>: Github, NPM, Grunt, Bower, Gulp.</li>
                    <li><b>CMS</b>: WordPress, Joomla.</li>
                    <li><b>Databases</b>: MySQL.</li>
                    <li>Ability to build responsive websites, or mobile applications via PSDs.</li>
                </ul>
            </div>
        );
    }
}
