//Import Dependencies.
import React, { Component } from 'react';
import Slider from 'react-slick';

//Import Styles.
import WorkStyles from '../work.scss';

//Import Client Components.
import WhollyGuacomole from './clients/wholly-guacomole.jsx';
import Petmate from './clients/petmate.jsx';
import LowT from './clients/lowt.jsx';
import DfrgMobile from './clients/dfrg-mobile.jsx';
import Jiffylube from './clients/jiffylube.jsx';

//Export Modules.
export default

class ResponsiveBuilds extends Component {
    render(){
        const settings = {
          infinite: true,
          slidesToShow: 1,
          speed: 700,
          slidesToScroll: 1
        };
        return(
            <div className="clearfix project-container">
                <div className="desktop-builds">
                    <img className="mac-mockup" src="app/assets/images/mac-desktop.png" />
                    <Slider {...settings}>
                        <div>
                            <WhollyGuacomole />
                        </div>
                        <div>
                            <Petmate />
                        </div>
                        <div>
                            <Jiffylube />
                        </div>
                    </Slider>
                </div>
                <div className="builds">    
                    <WhollyGuacomole />
                    <Petmate />
                    <Jiffylube />
                </div>
            </div>
        )
    }
}
