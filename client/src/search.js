import './App.css';
import React, {useState, useEffect} from 'react';
import { useHistory, Redirect } from "react-router-dom";
import Axios from 'axios';

import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { config } from './config';
import PropTypes from 'prop-types';
import useToken from './useToken';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostCard from './PostCard';
import bg from './assets/green_bg.jpg';
import NavBar from './components/NavBar/NavBar';

export default function Search(){
  const [values, setValues] = useState({
    posts: {},
    search_name: '',
    search_location: '',
    search_breed: ''
  });

  async function getData(){
    Axios.post('http://localhost:8000/api/search',
    {
      search_breed: '%' + values.search_breed + '%',
      search_name: '%' + values.search_name + '%' ,
      search_location: '%' + values.search_location + '%' 
    }).then( response => {
      console.log("here");
      if (!response){
        console.log("yes error");
      }
      console.log(response);
      handleChangePosts(response.data.posts);
    }).catch(error => {
      console.log("error in");
      console.log(error.response);
      let err = error.response.data.errors[0].msg;
      console.log(err);
      if (err){
      }
      else{
        console.log("Yes error.")
    }});
  }
  function handleSubmit(e){
    console.log("in handleSearch, e is"); // bunu basacak once
    console.log(e);
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    });
    e.preventDefault();
    
    getData();    
  };
  const handleChangePosts = (e) => {
    console.log("e is "+ e);
    setValues({
      ...values,
      ["posts"] : e
    });
    console.log("e is:")
    console.log(e);
    values.posts = e;
    console.log("values.name");
    console.log(values.namee);
    
    };
  const handleChange = e => {
    console.log(e);
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    });
  };
  return (
    <div style={{ 
      backgroundImage: `url(${bg})`,  backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', height:"100%"}}>
      <NavBar/>
      
      <Form onSubmit={handleSubmit}>
      <div className="makeCenter">
      <Row className="makeCenter">
        <Col sm={3} className="my-1">
        <FormGroup>
          <label>Breed</label>
          <Input
              name="search_breed"
              id="search_breed"
              value={values.search_breed}
              onChange={handleChange}
            />
        </FormGroup>
        </Col>
        <Col sm={3} className="my-1">
        <FormGroup>
          <label>Name</label>
        <Input
              name="search_name"
              id="search_name"
              value={values.search_name}
              onChange={handleChange}
            />
        </FormGroup>
        </Col>
        <Col sm={3} className="my-1">
        <FormGroup>
          <label>Location</label>
        <Input
              name="search_location"
              id="search_location"
              value={values.search_location}
              onChange={handleChange}
            />
        </FormGroup>
        </Col>
        <Col sm={2} className="my-1">
        <Button className="makeCenter" variant="success" size="lg" type="submit">Search</Button>
        </Col>
        </Row>
        </div>
      </Form>
      
      <div style={{ 
        backgroundImage: `url(${bg})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }} className="makeCenter">
      <Row>
        {
          values.posts.length > 0 &&
          values.posts.map((p, i) => (
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

  );
}