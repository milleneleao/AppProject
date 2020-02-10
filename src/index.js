
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import AboutProject from './AboutProject';
import Welcome from './Welcome';
import './scss/custom.scss';
import Welcome from './Welcome';
import About from './About';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Welcome} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/aboutproject" exact={true} component={AboutProject} />
    </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
