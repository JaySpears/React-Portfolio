//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import GlobalStyles from '../../styles/styles.scss';
import ResumeStyles from './resume.scss';

//Import Components.
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Ansira from './jobs/ansira.jsx';
import Sq1 from './jobs/sq1.jsx';
import PrintResume from './printResume.jsx';


//Export Modules.
export default

class ResumeElement extends Component {
    render(){
        return (
            <div>
                <Header />
                <div className="page-container">
                    <Ansira />
                    <Sq1 />
                    <PrintResume />
                </div>
                <Footer />
            </div>
        );
    }
}
