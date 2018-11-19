import React, { Component } from 'react';
import { mediaQueries } from '../App';

import './AppBar.scss';

const desktopSytle = {
    display: 'none'
}

export class AppBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let style = this.props.screenWidth >= mediaQueries.xl ? desktopSytle : [];

        return <div className="appbar" style={style}><a onClick={this.props.onOpenNavDrawer}>Menu</a></div>;
    }

}