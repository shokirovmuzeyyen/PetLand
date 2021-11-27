import React, {Component} from 'react'
import {NavBarElements} from './NavbarElements'
import './NavBar.css'
import {Button} from 'reactstrap';

class Navbar extends Component {
  state = {clicked: false}
  handleClick =() => {
    this.state({clicked: !this.state.clicked})
  }
  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">PetLand<i className="fab fa-react"></i></h1>
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
        <Button href="/login" >Log Out</Button>
      </nav>
    )
  }
}

export default Navbar
