//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import AboutStyles from './about.scss';

//Import Global Components.
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Container from '../../components/container/container.jsx';

//Import About Components.
import AboutIntro from './aboutIntro.jsx';

//Export Modules.
export default

class AboutElement extends Component {
    render(){
        return (
            <div>
                <Header />
                <Container>
                    <AboutIntro />
                </Container>
                <Footer />
            </div>
        );
    }
}
