import React from 'react';
import UserProvider from './UserContext'

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products'


export default function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
      </Switch>
    </UserProvider>
  )
}

