import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AdvancedSearchPage } from '../pages/AdvancedSearchPage';
import { UserRegistrationPage } from '../pages/UserRegistrationPage';
import { CardGridPage } from '../pages/CardGridPage';

export class Content extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact={true} component={AdvancedSearchPage}/>
                <Route path="/advancedsearch" exact={true} component={AdvancedSearchPage}/>
                <Route
                    path="/userregistration"
                    render={(props) => <UserRegistrationPage screenWidth={this.props.screenWidth}/>} 
                />
                <Route path="/cardgrid" component={CardGridPage}/>
            </Switch>
        );
    }
}