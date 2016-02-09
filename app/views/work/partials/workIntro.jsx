//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import WorkStyles from '../work.scss';

//Export Modules.
export default

class WorkIntro extends Component {
    render(){
        return(
            <div className="workpage-intro">
                <p>Working in the advertising industry allows me to be introduced to multiple clients. <br/>I've had the awesome oppurtunity to build from <b>scratch</b>, write complete <b>re-builds</b>, <br/>and/or up keep <b>maintence</b> for these clients websites.* <br/></p>
                <p>Want to talk business? Email me <a href="mailto:&#106;&#111;&#115;&#104;&#117;&#097;&#115;&#112;&#101;&#097;&#114;&#115;&#050;&#057;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">here</a>.</p>
            </div>
        )
    }
}
