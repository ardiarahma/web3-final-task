import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginPage from '../layouts/Login-page';
import HomePage from '../layouts/Login-page';


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/home" component={HomePage}/>
            </Switch>
        );
    }
}

export default Routes;