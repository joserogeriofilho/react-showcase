import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const NavItem = withRouter(props =>
    <Item location={props.location} id={props.id} onClick={props.onClick} link={props.link} label={props.label} />);

function Item(props) {
    let isActive = props.location.pathname === props.link ? "active-link" : "";

    console.log("props.location.pathname = " + props.location.pathname);
    console.log("props.link = " + props.link);

    return (
        <li className={ "list-item " + isActive }>
            <Link onClick={ props.onClose } to={ props.link }> { props.label } </Link>
        </li>
    );
}