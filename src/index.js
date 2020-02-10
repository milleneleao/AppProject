
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import AboutProject from './AboutProject';
import Welcome from './Welcome';
import Login from './Login'; 
import Register from './Register';
import './scss/custom.scss';
<<<<<<< HEAD
import * as serviceWorker from './serviceWorker';
=======
>>>>>>> 9de7600ce8ca5f78bcc04b1f00345a37da103e12
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/aboutproject" exact={true} component={AboutProject} />
            <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

