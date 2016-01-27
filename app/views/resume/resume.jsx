//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import GlobalStyles from '../../styles/styles.scss';
import ResumeStyles from './resume.scss';

//Import Components.
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

//Export Modules.
export default

class ResumeElement extends Component {
    render(){
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}
