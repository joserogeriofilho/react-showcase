import React, { Component } from 'react';
import './App.css';

import { SideBar } from './components/SideBar';
import { AppBar } from './components/AppBar';
import { Content } from './components/Content';
import { BlackenedScreen } from './components/BlackenedScreen';

const mediaQueries = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      sideBarVisible: false
    }

    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar(){
    this.setState({
      sideBarVisible : this.state.sideBarVisible ? false : true
    });
  }

  render() {
    let sideBarVisible = this.state.sideBarVisible;

    return (
      <div className="App">

        <SideBar visible={sideBarVisible}/>

        <div className="wrapper">
          <BlackenedScreen visible={sideBarVisible} onToggleSideBar={this.toggleSideBar}/>
          
          <AppBar onToggleSideBar={this.toggleSideBar}/>
          <Content />
        </div>

      </div>
    );
  }

}

export default App;
