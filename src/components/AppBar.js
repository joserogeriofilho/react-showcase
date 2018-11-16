import React, { Component } from 'react';
import './AppBar.scss';

export class AppBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="appbar"><a onClick={this.props.onToggleSideBar}>Menu</a></div>;
    }

}