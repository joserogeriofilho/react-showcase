import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { mediaQueries } from '../App';

import './NavDrawer.scss';

const visibleStyle = {
    marginLeft: '0px',
};

const hiddenStyle = {
    marginLeft: '-250px'
};

const desktopSytle = {
    marginLeft: '0px',
    position: 'relative'
}

export class NavDrawer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let style;

        if(this.props.screenWidth >= mediaQueries.xl){
            style = desktopSytle;
        } else {
            style = this.props.visible ? visibleStyle : hiddenStyle;
        }

        return (
            <div className="navigation-drawer" style={style}>
                <div className="navigation-drawer-header">
                    <h1>LOGO</h1>
                </div>
                <ul>
                    <li><Link onClick={this.props.onCloseNavDrawer} to="/advancedsearch">Advanced Searh</Link></li>
                    <li><Link onClick={this.props.onCloseNavDrawer} to="/userregistration">User Registration</Link></li>
                    <li><Link onClick={this.props.onCloseNavDrawer} to="/cardgrid">Card Grid</Link></li>
                </ul>
            </div>
        );
    }

}