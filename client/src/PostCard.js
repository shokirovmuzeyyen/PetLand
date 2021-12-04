import React, { useState, useEffect} from 'react'
import Navbar from "./components/NavBar/NavBar";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PostCard = ({ name, breed, age, location, extra_info, p_image }) => {

  return (
    <div>
        <Card border="danger" bg={"light".toLowerCase()}
            text={"light" === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2" style={{ width: '30rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="makeCenter" style={{fontSize:28}}>Meet with a friend</Card.Title>
              <br/>
            <Card.Text>
              
          <div>
            <Row>
              <Col><label style={{fontWeight: "bold"}}>Name:</label></Col>
              <Col className="makeCenter"><label id="namee" >{name}</label></Col>
            </Row>
            <Row>
              <Col><label>Breed:</label></Col>
              <Col className="makeCenter"><label id="breed" >{breed}</label></Col>
            </Row>
            <Row>
              <Col><label>Age:</label></Col>
              <Col className="makeCenter"><label id="age" >{age}</label></Col>
            </Row>
            <Row>
              <Col><label>Location:</label></Col>
              <Col className="makeCenter"><label id="location" >{location}</label></Col>
            </Row>
            <Row>
              <Col><label>Extra Info:</label></Col>
              <Col className="makeCenter"><label id="extra_info" >{extra_info}</label></Col>
            </Row>
            <Row>
              <img src={p_image}></img>
            </Row>
          </div>
              
            </Card.Text>
              
            </Card.Body>
        </Card>
    </div>
    
  )
}

export default PostCard