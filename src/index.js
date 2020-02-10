import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import AboutProject from './AboutProject';
import Welcome from './Welcome';
import './scss/custom.scss';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Welcome} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/aboutproject" exact={true} component={AboutProject} />
    </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
//ReactDOM.render(<About />, document.getElementById('about'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
