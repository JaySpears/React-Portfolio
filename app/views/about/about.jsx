//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import GlobalStyles from '../../styles/styles.scss';
import AboutStyles from './about.scss';

//Import Components.
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import AboutIntro from './aboutIntro.jsx';

//Export Modules.
export default

class AboutElement extends Component {
    render(){
        return (
            <div>
                <Header />
                <AboutIntro />
                <Footer />
            </div>
        );
    }
}
