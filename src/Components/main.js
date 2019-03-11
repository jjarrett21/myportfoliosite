import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import Contact from './contact';
import AboutMe from './aboutMe';
import Resume from './resume';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/home" component={LandingPage} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />


    </Switch>
)

export default Main;


