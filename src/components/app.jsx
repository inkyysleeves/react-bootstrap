import React from 'react';
import '../css/app.css';
import NavBar from './NavBar';
import Properties from './properties';
import { Route, Switch } from 'react-router-dom';
import AddProperty from './AddProperty';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/properties"
          component={Properties}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/AddProperty"
          component={AddProperty}
        />
      </Switch>
    </div>
  );
};

export default App;
