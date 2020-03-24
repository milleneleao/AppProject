
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import AboutProject from './AboutProject';
import Welcome from './Welcome';
import Login from './Login'; 
import Register from './Register';
import Profile from './Profile'
import Dashboard from './Dashboard';
import DashboardTemp from './dashboardTemp';
import './scss/custom.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Welcome} />
            <Route path="/about" component={DashboardTemp} />
            <Route path="/login" component={Login} />
            <Route path="/aboutproject" exact={true} component={AboutProject} />
            <Route path="/register" component={Register} />

            <Route path="/profile" component={Profile} /> 
            <Route path="/dashboard" component={Dashboard} /> 
=======
            <Route path="/profile" component={Profile} />
            <Route path="/dashboardTemp.js" component={DashboardTemp} />
>>>>>>> cf63f460e79c64cc2512562f7f4758ecd4d01d2e
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

