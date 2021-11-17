import './App.css';
import React from 'react';
import Login from './login';
import Register from './register';
import Welcome from './welcome';
import Feed from './feed';
import DM from './dm';
import Profile from './profile';
import CreatePost from './CreatePost';
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
      <Route path="/feed" component={Feed} />
      <Route path="/createPost" component={CreatePost} />
      <Route path="/dm" component={DM} />
      <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
