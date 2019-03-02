import React, { Component } from 'react';
import { NavItem } from './NavItem';

export class NavDrawer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        let isVisible = this.props.visible ? "nav-drawer-visible" : "";
        let onClose = this.props.onClose;

        let itens = [
            { id:1, icon:"home", label:"Advanced Search", link:"/advancedsearch" },
            { id:2, icon:"person", label:"User Registration", link:"/userregistration" },
            { id:3, icon:"collections", label:"Card Grid", link:"/cardgrid" }
        ];

        return (
            <div className="nav-drawer-wrapper">
                <div className={ "scrim " + isVisible } onClick={ onClose }></div>

                <div className={ "nav-drawer " + isVisible }>
                    <div className="nav-drawer-header">
                        <div className="app-title">
                            <span className="bold">R</span>eact<br></br><span className="bold">S</span>howcase
                        </div>
                    </div>

                    <div className="nav-drawer-body">
                        <ul className="list">
                            { itens.map(i =>
                                <NavItem
                                    key={ i.id }
                                    id={ i.id }
                                    icon={ i.icon }
                                    label={ i.label }
                                    link={ i.link }
                                    onCloseNavDrawer={ onClose } />
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}