import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import Teacher from './components/Teacher';
import Client from './components/client/Home';
import CurrentClasses from './components/client/CurrentClasses';
import AvailableClasses from './components/client/AvailableClasses';

import MakeAClass from './components/MakeAClass';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <PrivateRoute exact path='/client'>
            <Client />
          </PrivateRoute>
          <Route exact path='/teacher'>
            <Teacher />
          </Route>
          <Route exact path='/makeaclass'>
            <MakeAClass />
          </Route>
          <Route exact path='/client/classes/current'>
            <CurrentClasses />
          </Route>
          <Route exact path='/client/classes/available'>
            <AvailableClasses />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
