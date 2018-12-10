import React from 'react';
import { Link } from 'react-router-dom';

export function NavDrawer(props) {
    let navDrawerVisibleClass = props.visible ? "nav-drawer-visible" : "";

    return (
        <div className={"navigation-drawer " + navDrawerVisibleClass}>
            <div className="navigation-drawer-header">
                <h1>LOGO</h1>
            </div>
            <ul>
                <li><Link onClick={props.onCloseNavDrawer} to="/advancedsearch">Advanced Search</Link></li>
                <li><Link onClick={props.onCloseNavDrawer} to="/userregistration">User Registration</Link></li>
                <li><Link onClick={props.onCloseNavDrawer} to="/cardgrid">Card Grid</Link></li>
            </ul>
        </div>
    );
}