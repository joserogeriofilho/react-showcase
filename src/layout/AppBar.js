import React from 'react';

export function AppBar(props) {
    return(
        <div className="app-bar">
            <a onClick={props.onOpenNavDrawer}>Menu</a>
        </div>
    );
}