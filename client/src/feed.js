import React, { useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { config } from './config';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import axios from 'axios';
import PostCard from './PostCard';
import bg from './assets/trees.jpeg';
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import NavBar from './components/NavBar/NavBar';
const Feed = () => {
  const [values, setValues] = useState({
    namee: {}
  });
  const [repo, setRepo] = useState([
  ]);
  const [errors, setErrors] = useState('');
  const [backend_error, setbackendError] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const handleChangePosts = (e) => {
    console.log("e is "+ e);
    setValues({
      ...values,
      ["namee"] : e
    });
    console.log("e is:")
    console.log(e);
    values.namee = e;
    console.log("values.name");
    console.log(values.namee);
    
    };

  const getRepo = () => {
    console.log("in");
    Axios.post(`${config.SERVER_URI}/api/get-posts`,
    //Axios.post('http://localhost:8000/api/get-posts',
    {
    }).then(res => {
      const items = res.data;
      
      console.log("The response is:")
      console.log(res);
      console.log(items);
      console.log(res.data.posts);
      console.log("----");
      handleChangePosts(res.data.posts);
      console.log("this is values");
      console.log(values);
      
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
  useEffect(()=> 
    getRepo()
  ,[]);
  return (
    <div>
      <NavBar/>
      <div style={{ 
        backgroundImage: `url(${bg})`, padding:"10%"}} className="makeCenter">
        
          <Row>
          {
            values.namee.length > 0 &&
            values.namee.map((p, i) => (
              <Col xs={6} className="makeCenter">
                <PostCard
                  name={p.name}
                  breed={p.breed}
                  age={p.age}
                  location={p.location}
                  extra_info={p.extra_info}
                  p_image={p.p_image}
                  vaccinated={p.vaccinated}
                  ts={p.ts}
                />
              </Col>
            ))
          }
          </Row>
      </div>
    </div>
  )
}

export default Feed
