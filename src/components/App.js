import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import DisplayNote from '../containers/DisplayNote';
import Header from './Header';
import { withSession } from '../containers/auth/withSession';
import Callback from '../containers/auth/Callback';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/callback" component={Callback} />
        <Route path="/note/:id" component={withSession(DisplayNote)} />
        <Route exact path="/" component={withSession(Home)} />
      </Switch>
    </Router>
  );
}
