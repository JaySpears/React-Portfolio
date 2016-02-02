//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import WorkStyles from './work.scss';

//Import Components.
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import WorkIntro from './workIntro.jsx';
import WorkClients from './workClients.jsx';
import WorkDisclaimer from './workDisclaimer.jsx';

//Export Modules.
export default

class WorkElement extends Component {
    render(){
        return (
            <div>
                <Header />
                <div className="page-container clearfix">
                    <WorkIntro />
                    <WorkClients />
                    <WorkDisclaimer />
                </div>
                <Footer />
            </div>
        );
    }
}
