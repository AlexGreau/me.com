import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { HOME, ABOUT, PORTFOLIO } from './constants/Routes';

import Layout from './hoc/Layout/Layout';
import About from './containers/About/About';
import Portfolio from './containers/Portfolio/Portfolio';
import Home from './containers/Home/Home';
import NotFound404 from './containers/404/404'

const App = () => {

  return (

    <div className="App light-theme">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to={HOME}></Redirect>
          </Route>
          <Route path={HOME} component={Home}></Route>
          <Route path={ABOUT} component={About}></Route>
          <Route path={PORTFOLIO} component={Portfolio}></Route>
          <Route component={NotFound404}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
