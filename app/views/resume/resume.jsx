//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import ResumeStyles from './resume.scss';

//Import Global Components.
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Container from '../../components/container/container.jsx';

//Import Resume Components.
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
                <Container>
                    <Ansira />
                    <Sq1 />
                    <PrintResume />
                </Container>
                <Footer />
            </div>
        );
    }
}
