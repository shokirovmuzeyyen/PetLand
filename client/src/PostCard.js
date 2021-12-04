import React, { useState, useEffect} from 'react'
import Navbar from "./components/NavBar/NavBar";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PostCard = ({ name, breed, age, location, extra_info, p_image, vaccinated, ts }) => {

  return (
    <div>
        <Card border="danger" bg={"light".toLowerCase()}
            text={"light" === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2" style={{ width: '30rem', height: "800px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="makeCenter postTitle" style={{fontSize:28, textTransform: 'uppercase'}}>Meet with {name}</Card.Title>
              <br/>
            <Card.Text>
              
          <div>
            <Row>
              <Col><label className="postTitle">Name:</label></Col>
              <Col className="makeCenter"><label id="namee" >{name}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle">Breed:</label></Col>
              <Col className="makeCenter"><label id="breed" >{breed}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle">Age:</label></Col>
              <Col className="makeCenter"><label id="age" >{age}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle">Location:</label></Col>
              <Col className="makeCenter"><label id="location" >{location}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle">Vaccinated:</label></Col>
              <Col className="makeCenter"><label id="location" >{vaccinated?"Yes":"No"}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle">Extra Info:</label></Col>
              <Col className="makeCenter"><label id="extra_info" >{extra_info}</label></Col>
            </Row>
            <br/>
            <Row className="makeCenter">
              <img src={p_image} className="makeCenter photo"></img>
            </Row>
            <Row>
              <Col><label style={{fontSize:"10px", position: "absolute", right:0, marginRight:"10%"}} className="makeCenter" id="extra_info" >{ts.substring(0,10)}</label></Col>
            </Row>
          </div>
              
            </Card.Text>
              
            </Card.Body>
        </Card>
    </div>
    
  )
}

export default PostCard