import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const NavItem = withRouter(props =>
    <Item location={props.location} id={props.id} icon={props.icon} label={props.label} link={props.link} onCloseNavDrawer={props.onCloseNavDrawer} />);

function Item(props) {
    let isActive = props.location.pathname === props.link ? "active-link" : "";

    return (
        <li className={ "list-item " + isActive }>
            <i className="material-icons list-icon">{ props.icon }</i>
            <Link className="list-link" onClick={ props.onCloseNavDrawer } to={ props.link }> { props.label } </Link>
        </li>
    );
}