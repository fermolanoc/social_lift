import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Main';
import AddEmployee from '../components/AddEmployee';
import RateEmployee from '../components/RateEmployee';
import Employee from '../components/Employee';

const Switcher = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/AddEmployee' component={AddEmployee}></Route>
            <Route exact path='/RateEmployee' component={RateEmployee}></Route>
            <Route exact path='/Employee' component={Employee}></Route>
        </Switch>
    );
}

export default Switcher;