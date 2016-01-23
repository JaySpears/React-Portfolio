//Import Dependencies.
import React, { Component } from 'react';

//Import Styles.
import WorkStyles from './work.scss';
import WhollyGuacomole from './clients/wholly-guacomole.jsx';
import Petmate from './clients/petmate.jsx';
import LowT from './clients/lowt.jsx';
import DfrgMobile from './clients/dfrg-mobile.jsx';
import Jiffylube from './clients/jiffylube.jsx';

//Export Modules.
export default

class WorkClients extends Component {
    render(){
        return(
            <div>
                <WhollyGuacomole />
                <Petmate />
                <LowT />
                <DfrgMobile />
                <Jiffylube />
            </div>
        )
    }
}
