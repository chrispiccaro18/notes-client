import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import DisplayNote from '../containers/DisplayNote';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/note/:id" component={DisplayNote} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
