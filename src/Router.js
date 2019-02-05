import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Portfolio from './components/Portfolio';
import Youtube from './components/Youtube/Youtube';

const RouterComponent = () => { 
    return(
      <Router hideNavBar>
        <Scene key='root'>
          <Scene 
             onRight={() => Actions.youtube()}
             rightTitle='YouTube'
             title='PortFolio'
            key='portfolio' component={Portfolio} inital />
          <Scene key='youtube' component={Youtube} title='YouTube Clone' />
        </Scene>
      </Router>
    )
};

export default RouterComponent;