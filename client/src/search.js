import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { config } from './config';
import useToken from './useToken';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostCard from './PostCard';


export default function Search(){
  const [values, setValues] = useState({
    posts: {},
    search_name: '',
    search_location: '',
    search_breed: ''
  });

  async function getData(){
    Axios.post(`${config.SERVER_URI}/api/search`,
    {
      search_breed: '%' + values.search_breed + '%',
      search_name: '%' + values.search_name + '%' ,
      search_location: '%' + values.search_location + '%' 
    }).then( response => {
      console.log(response);
      handleChangePosts(response.data.posts);
    }).catch(error => {
      console.log(error.response);
      let err = error.response.data.errors[0].msg;
      console.log(err);
    });
  }
  function handleSubmit(e){
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    });
    e.preventDefault();
    
    getData();    
  };
  const handleChangePosts = (e) => {
    setValues({
      ...values,
      ["posts"] : e
    });
    values.posts = e;
    };
  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    });
  };
  return (
    <div className="search">
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <label>Breed</label>
          <Input
              name="search_breed"
              id="search_breed"
              value={values.search_breed}
              onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
          <label>Name</label>
        <Input
              name="search_name"
              id="search_name"
              value={values.search_name}
              onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
          <label>Location</label>
        <Input
              name="search_location"
              id="search_location"
              value={values.search_location}
              onChange={handleChange}
            />
        </FormGroup>
        <Button className="makeCenter" variant="success" size="lg" type="submit">POST</Button>
      </Form>
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
  );
}