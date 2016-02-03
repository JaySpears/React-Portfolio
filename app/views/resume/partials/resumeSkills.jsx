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
                <h2>Skills</h2>
                <ul>
                    <li>Languages: HTML (XHMTL, HTML5), CSS, SASS, JavaScript.</li>
                    <li>Libraries: jQuery, Bootstrap, Zurb Foundation, Bourbon Neat.</li>
                    <li>Technologies: Github, NPM, Grunt, Bower, Gulp.</li>
                    <li>CMS: WordPress, Joomla.</li>
                    <li>Databases: MySQL.</li>
                    <li>Frameworks: ReactJS.</li>
                    <li>Ability to build responsive websites, or mobile applications via PSDs.</li>
                </ul>
            </div>
        );
    }
}
