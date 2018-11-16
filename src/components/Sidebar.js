import React, { Component } from 'react';
import './SideBar.scss';

const visibleStyle = {
    marginLeft: '0px',
    position: 'absolute',
    zIndex: 999
};

const hiddenStyle = {
    marginLeft: '-250px'
};

export class SideBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let style = this.props.visible ? visibleStyle : hiddenStyle;

        return (
            <div className="sidebar" style={style}>
            </div>
        );
    }

}