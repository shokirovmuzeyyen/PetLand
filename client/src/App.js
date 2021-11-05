import './App.css';
import React from 'react';
import Login from './login';
import Register from './register';
import Welcome from './welcome';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//run npm install react-router-dom --save
//npm install --save bootstrap
// npm install axios
// npm install react-scroll

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
