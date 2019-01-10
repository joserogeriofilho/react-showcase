import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import { NavDrawer } from './layout/NavDrawer';
import { AppBar } from './layout/AppBar';
import { Content } from './layout/Content';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      navDrawerOpened: false,
      screenWidth: 0,
      screenHeight: 0
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.openNavDrawer = this.openNavDrawer.bind(this);
    this.closeNavDrawer = this.closeNavDrawer.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });
  }

  openNavDrawer(){
    this.setState({
      navDrawerOpened: true
    });
  }

  closeNavDrawer(){
    this.setState({
      navDrawerOpened: false
    });
  }

  render() {
    let navDrawerOpened = this.state.navDrawerOpened;
    let screenWidth = this.state.screenWidth;
    let closeNavDrawer = this.closeNavDrawer;
    let openNavDrawer = this.openNavDrawer;

    return (
      <BrowserRouter>
        <div className="App">
            <NavDrawer
              visible={navDrawerOpened}
              onClose={closeNavDrawer}
            />

            <div className="wrapper">              
              <AppBar screenWidth={screenWidth} onOpenNavDrawer={openNavDrawer}/>
              <Content screenWidth={screenWidth}/>
            </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
