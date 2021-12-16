import './App.css';
import React from 'react';
import Login from './login';
import Register from './register';
import Welcome from './welcome';
import Feed from './feed';
import DM from './dm';
import Profile from './profile';
import Settings from './profile';
import CreatePost from './createPost';
import Search from './search';
import PostComment  from './postComment';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MyPosts from './myPosts';
import NearByMe from './nearByMe';
import ChangePassword from './changePassword'
import Favorites from './myFavorites.js'
//run npm install react-router-dom --save
//npm install --save bootstrap
// npm install axios
// npm install react-scroll

import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  /*
  const [token, isToken] = useState(getToken()) ;
  function setToken(userToken) {
    isToken(true);
    sessionStorage.setItem('token',userToken);
  };
  
  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = tokenString;
    if (userToken) {return true;}
    else {return false;}
  };

  function clearToken() {
    sessionStorage.removeItem('token');
    isToken(false);  
  }*/

  if (!token){
    return (
    <Router>
      <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/login" component={() => <Login setToken={setToken} /> } /> 
      <Route path="/register" component={Register} />
      <Redirect to="/login"/>
      </Switch>
    </Router>
    );
  }
  else{
  return (
    <Router>
      <Switch>
      <Route path="/feed" component={Feed} />
      <Route path="/createPost" component={CreatePost} />
      <Route path="/dm" component={DM} />
      <Route path="/settings" component={Settings} />
      <Route path="/search" component={Search} />
      <Route path="/postComment" component={PostComment} />
      <Route path="/myPosts" component={MyPosts} />
      <Route path="/myFavorites" component={Favorites} />
      <Route path="/nearByMe" component={NearByMe} />
      <Route path="/changePassword" component={ChangePassword} />
      <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
  }
}

//  
export default App;
