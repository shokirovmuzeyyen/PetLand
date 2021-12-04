import React, {useEffect, Component} from 'react'
import {NavBarElements} from './NavbarElements'
import './NavBar.css'
import {Button} from 'reactstrap';
import Axios from 'axios';
import useToken from '../../useToken';
import { useHistory } from "react-router-dom";
import {  Link, Redirect } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { useState } from 'react';

class Navbar extends Component{ 
  constructor(props) {
    super(props);
    console.log(this.props);
     const { history } = this.props;
    this.routingFunction = this.routingFunction.bind(this);
    //this.logout() = this.logout.bind(this);
  }

  routingFunction = () => {
    this.props.history.push({
        pathname: '/feed',
        //state: param
    });
  }
 

  state = {clicked: false}
  handleClick =() => {
    this.state({clicked: !this.state.clicked})
  };

  async logout(e) {
    console.log("out");
    Axios.post('http://localhost:8000/api/logout',
    {
      logout: true,   
    }).then((response) => {
      if (!response){
        console.log("no error");
      }
      else{
        console.log(response);
        sessionStorage.removeItem('token');
        //history.push('/feed')   
        this.props.history.push("/feed");
      }

    }).catch(error => {
        console.log(error);
        let err = error.response;
        if (err){
          console.log(err);
        }});
     
    };



  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">PetLand<i className="fab fa-thin fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavBarElements.map((item, index) => {
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
              )})
          }
        </ul>
        <Button onClick={this.logout}>Log Out</Button>
      </nav>
    )
  }
}



export default  withRouter(Navbar)

