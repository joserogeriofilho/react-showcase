import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Components } from './pages/Components';
import { Sobre } from './pages/Sobre';

import './Content.scss';

export class Content extends Component {

    render(){
        return (
            <Switch>
                <Route path="/components" exact={true} component={Components}/>
                <Route
                    path="/sobre"
                    render={(props) => <Sobre screenWidth={this.props.screenWidth}/>} 
                />
            </Switch>
        );
    }

}