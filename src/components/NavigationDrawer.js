import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { mediaQueries } from '../App';

import './NavigationDrawer.scss';

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

export class NavigationDrawer extends Component {
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
            <div className="sidebar" style={style}>
                <ul>
                    <li><Link onClick={this.props.onCloseNavigationDrawer} to="/sobre">Sobre</Link></li>
                    <li><Link onClick={this.props.onCloseNavigationDrawer} to="/components">Components</Link></li>
                </ul>
            </div>
        );
    }

}