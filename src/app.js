import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from "@/utils/history";

const App = () => {
   return (
    <Router history={history}>
        <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/users" exact component={Users} />
        <Route path="/goods" exact component={Goods} />
        </Switch>
    </Router>
   )
}