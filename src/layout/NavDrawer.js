import React from 'react';
import { Link } from 'react-router-dom';

export function NavDrawer(props) {
    let navDrawerVisibleClass = props.visible ? "nav-drawer-visible" : "";

    return (
        <div className={"nav-drawer " + navDrawerVisibleClass}>
            <div className="nav-drawer-header">
                <h6>REACT SHOWCASE</h6>
            </div>
            <div className="nav-drawer-body">
                <ul>
                    <li><Link onClick={props.onCloseNavDrawer} to="/advancedsearch">Advanced Search</Link></li>
                    <li><Link onClick={props.onCloseNavDrawer} to="/userregistration">User Registration</Link></li>
                    <li><Link onClick={props.onCloseNavDrawer} to="/cardgrid">Card Grid</Link></li>
                </ul>
            </div>
        </div>
    );
}