
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import AboutProject from './AboutProject';
import Welcome from './Welcome';
import Login from './Login'; 
import Register from './Register';
import Profile from './Profile';
<<<<<<< HEAD
import DashboardTemp from './dashboardTemp';
=======
import AboutCourse from './AboutCourse';
>>>>>>> c14df670661c7d848900d529c49b081d441f7c5d
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
<<<<<<< HEAD
            <Route path="/dashboardTemp.js" component={DashboardTemp} />
=======
            <Route path="/aboutcourse" component={AboutCourse} />
>>>>>>> c14df670661c7d848900d529c49b081d441f7c5d
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

