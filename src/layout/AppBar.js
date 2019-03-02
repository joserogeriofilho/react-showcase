import React from 'react';

export function AppBar(props) {
    return(
        <div className="app-bar regular-top-app-bar">
            <i className="material-icons" onClick={props.onOpenNavDrawer}>menu</i>
            <span className="app-bar-title">React Showcase</span>
        </div>
    );
}