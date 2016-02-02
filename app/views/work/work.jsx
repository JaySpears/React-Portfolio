//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import WorkStyles from './work.scss';

//Import Global Components.
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Container from '../../components/container/container.jsx';

//Import Work Components.
import WorkIntro from './partials/workIntro.jsx';
import WorkClients from './partials/workClients.jsx';
import WorkDisclaimer from './partials/workDisclaimer.jsx';

//Export Modules.
export default

class WorkElement extends Component {
    render(){
        return (
            <div>
                <Header />
                <Container>
                    <WorkIntro />
                    <WorkClients />
                    <WorkDisclaimer />
                </Container>
                <Footer />
            </div>
        );
    }
}
