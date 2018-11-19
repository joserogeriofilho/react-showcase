import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { NavigationDrawer } from './components/NavigationDrawer';
import { AppBar } from './components/AppBar';
import { Content } from './components/Content';
import { BlackenedScreen } from './components/BlackenedScreen';

export const mediaQueries = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      sideBarVisible: false,
      screenWidth: 0,
      screenHeight: 0
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.openNavigationDrawer = this.openNavigationDrawer.bind(this);
    this.closeNavigationDrawer = this.closeNavigationDrawer.bind(this);
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

  openNavigationDrawer(){
    this.setState({
      sideBarVisible: true
    });
  }

  closeNavigationDrawer(){
    this.setState({
      sideBarVisible: false
    });
  }

  render() {
    let sideBarVisible = this.state.sideBarVisible;
    let screenWidth = this.state.screenWidth;
    let closeNavigationDrawer = this.closeNavigationDrawer;
    let openNavigationDrawer = this.openNavigationDrawer;

    return (
      <BrowserRouter>
        <div className="App">
            <NavigationDrawer
              screenWidth={screenWidth}
              visible={sideBarVisible}
              onCloseNavigationDrawer={closeNavigationDrawer}
            />

            <div className="wrapper">
              <BlackenedScreen visible={sideBarVisible} onCloseNavigationDrawer={closeNavigationDrawer}/>
              
              <AppBar screenWidth={screenWidth} onOpenNavigationDrawer={openNavigationDrawer}/>
              <Content screenWidth={screenWidth}/>
            </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
