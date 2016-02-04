//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from './resume.scss';

//Import Global Components.
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Container from '../../components/container/container.jsx';

//Import Resume Components.
import ResumeHeader from './partials/resumeHeader.jsx';
import ResumeJobs from './partials/resumeJobs.jsx';
import ResumeReferences from './partials/resumeReferences.jsx';
import ResumeSkills from './partials/resumeSkills.jsx';
import PrintResume from './partials/printResume.jsx';


//Export Modules.
export default

class ResumeElement extends Component {
    render(){
        return (
            <div>
                <Header />
                <Container>
                    <ResumeHeader />
                    <ResumeJobs />
                    <ResumeSkills />
                    <ResumeReferences />
                    <PrintResume />
                </Container>
                <Footer />
            </div>
        );
    }
}
