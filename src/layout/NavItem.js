import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const NavItem = withRouter(props =>
    <Item location={props.location} id={props.id} onCloseNavDrawer={props.onCloseNavDrawer} link={props.link} label={props.label} />);

function Item(props) {
    let isActive = props.location.pathname === props.link ? "active-link" : "";

    return (
        <li className={ "list-item " + isActive }>
            <Link onClick={ props.onCloseNavDrawer } to={ props.link }> { props.label } </Link>
        </li>
    );
}