import React, { useState, useEffect} from 'react'
import Navbar from "./components/NavBar/NavBar";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { config } from './config';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import axios from 'axios';

const Feed = () => {
  const [values, setValues] = useState({
    namee: ''
  });
  const [repo, setRepo] = useState([
  ]);
  const [errors, setErrors] = useState('');
  const [backend_error, setbackendError] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const handleChangePosts = e => {
      setValues({
        ...values,
        ["namee"] : e
      });
      console.log("e is:")
      console.log(e);
      values.namee = e;
      console.log(values.name);
    };

  const getRepo = () => {
    console.log("in");
    //Axios.get(`${config.SERVER_URI}/api/getPosts`,
    Axios.post('http://localhost:8000/api/get-posts',
    {
    }).then(res => {
      const items = res.data;
      
      console.log("The response is:")
      console.log(res);
      console.log(items);
      console.log(res.data.posts);
      //setValues({name : res.data.posts});
  
      handleChangePosts(res.data.posts);
      console.log("this is values");
      console.log(values);
      
      //repo = res.data.posts;
      //console.log(repo);
    }).catch(error => {
        console.log("error in");
        console.log(error.response);
        let err = error.response.data.errors[0].msg;
        console.log(err);
        if (err){
        }
        else{
          console.log("Yes error.")
          setbackendError('');
          history.push("/feed");
          setIsSubmitted(true);
      }});
  }
  /*useEffect(()=> 
    getRepo()
  ,[]);*/
  return (
    <div style={{ backgroundImage: `url(https://st.depositphotos.com/2015673/4034/v/950/depositphotos_40343767-stock-illustration-forest-landscape.jpg)`, display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div>
         <Button className="makeCenter" variant="success" size="lg" type="submit" onClick={()=> {getRepo();}}>Load Posts</Button>
      <Row>
        <Col>
          <Card border="danger" bg={"light".toLowerCase()}
            text={"light" === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2" style={{ width: '35rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="makeCenter" style={{fontSize:28}}>Meet with a friend</Card.Title>
              <br/>
            <Card.Text>
              
          <div>
            <Row>
              <Col><label>Name</label></Col>
              <Col><label id="namee" >{values.namee[3]}</label></Col>
            </Row>
            <Row>
              <Col><label>Breed</label></Col>
              <Col><label id="breed" >{values.namee[3]}</label></Col>
            </Row>
            <Row>
              <Col><label>Age</label></Col>
              <Col><label id="breed" >{values.namee[3]}</label></Col>
            </Row>
            <Row>
              <Col><label>Location</label></Col>
              <Col><label id="breed" >{values.namee[3]}</label></Col>
            </Row>
            <Row>
              <Col><label>Extra Info</label></Col>
              <Col><label id="breed" >{values.namee[3]}</label></Col>
            </Row>
          </div>
              
            </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="danger" bg={"light".toLowerCase()}
            text={"light" === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2" style={{ width: '35rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="makeCenter" style={{fontSize:28}}>Meet with a friend</Card.Title>
              <br/>
            <Card.Text>
            </Card.Text>
            </Card.Body><myInput name="breed"/>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default Feed
