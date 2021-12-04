import React from 'react'
import Navbar from "./components/NavBar/NavBar";

const feed = ({isAuth}) => {
  return (
    <div>
    < Navbar/>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <h1>Welcome</h1>
      <h2>-- Posts will be here</h2>
    </div>
    </div>
  )
}

export default feed
