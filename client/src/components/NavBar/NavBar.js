import React, {useEffect, Component} from 'react'
import {NavBarElements} from './NavbarElements'
import './NavBar.css'
import {Button} from 'reactstrap';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { config } from '../../config';

class Navbar extends Component{
  state = {clicked: false}
  handleClick =() => {
    this.state({clicked: !this.state.clicked})
  };

  render(){
    return(
      <nav className="NavbarItems">
        <a className="navbar-logo" style={{textDecoration: 'none'}} href={"/feed"}><h2>PetLand<i className="fas fa-paw"></i></h2></a>
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
      </nav>
    )
  }
}



export default  withRouter(Navbar)

