import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavDrawer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        let isVisible = this.props.visible ? "nav-drawer-visible" : "";
        let onClose = this.props.onClose;

        let itens = [
            { id:1, label:"Advanced Search", link:"/advancedsearch" },
            { id:2, label:"User Registration", link:"/userregistration" },
            { id:3, label:"Card Grid", link:"/cardgrid" }
        ];

        return (
            <div className="nav-drawer-wrapper">
                <div className={ "scrim " + isVisible } onClick={ onClose }></div>

                <div className={ "nav-drawer " + isVisible }>
                    <div className="nav-drawer-header">
                        <h6>REACT SHOWCASE</h6>
                    </div>

                    <div className="nav-drawer-body">
                        <ul className="list">
                            { itens.map(i =>
                                <li key={ i.id } className={ "list-item " }>
                                    <Link onClick={ onClose } to={ i.link }> { i.label } </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}