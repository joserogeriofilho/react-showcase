import React from 'react';

export function AppBar(props) {
    return(
        <div className="app-bar regular-top-app-bar">
            <a className="app-bar-navigation-icon" onClick={props.onOpenNavDrawer}>
                <i class="material-icons">menu</i>
            </a>
            <span className="app-bar-title"><h6>React Showcase</h6></span>
        </div>
    );
}