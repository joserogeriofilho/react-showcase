import React, { Component } from 'react';
import { Components } from './pages/Components';
import { Sobre } from './pages/Sobre';
import './Content.scss';

export class Content extends Component {

    render(){
        return (
            <div className="content container-fluid">
                <Sobre />
            </div>
        );
    }

}