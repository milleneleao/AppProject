
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/custom.scss';
import Welcome from './Welcome';
import About from './About';
import Login from './Login'; 
import Register from './Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

