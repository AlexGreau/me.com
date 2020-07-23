import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HOME from './constants/Routes';

import Layout from './hoc/Layout/Layout';

function App() {
  return (

    <div className="App light-theme">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to={HOME}></Redirect>
          </Route>
          <Route path={HOME} component={Layout}></Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
