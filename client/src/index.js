
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import AboutProject from './AboutProject';
import Welcome      from './Welcome';
import Login        from './Login'; 
import Register     from './Register';
import Profile      from './Profile';
import Calendar    from './Calendar';
import AboutCourse from './AboutCourse';
import PayPage     from './PayPage';
import Dashboard from './Dashboard';
import ClassRoom from './classRoom';
import DashboardTeacher from './DashboardTeacher';
import './scss/custom.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/aboutproject" exact={true} component={AboutProject} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} /> 
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/aboutcourse" component={AboutCourse} />
            <Route path="/paypage" component={PayPage} />
            <Route path="/DashboardTeacher" component={DashboardTeacher} />
            <Route path="/classRoom" component={ClassRoom} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

