import './App.css';
import React, { useState, useEffect} from 'react'
import Axios from 'axios';

import { config } from './config';
import useToken from './useToken';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostCard from './postCard';
import bg from './assets/bg.jpg';
import NavBar from './components/NavBar/NavBar';

const NearByMe = () => {
  const [values, setValues] = useState({
    posts: {}
  });
  const tokenString = sessionStorage.getItem('token');
  async function getData(){
    console.log("in getData()");
  
   // Axios.post('http://localhost:8000/api/nearByMe',
  Axios.post(`${config.SERVER_URI}/api/nearByMe`,
  {
    user_id: tokenString
  }).then( response => {
      console.log("the data is:");
    console.log(response);
    handleChangePosts(response.data.posts);
    }).catch(error => {
      console.log(error.response);
      let err = error.response.data.errors[0].msg;
      console.log(err);
    });
  }

  useEffect(()=> 
    getData()
  ,[]);
  const handleChangePosts = (e) => {
    setValues({
      ...values,
      ["posts"] : e
    });
    values.posts = e;
    };
    return (
      <div style={{ 
        backgroundImage: `url(${bg})`,  backgroundPosition: 'center'}}>
        <NavBar/>
        <Row style={{marginTop: "3%"}}>
            <label className="makeCenter" style={{marginBottom: "2%", textTransform: 'uppercase', color:'black', fontSize:"18px"}}>{values.posts.length > 0 ?"You are seeing the posts that are near to you: " + values.posts[0].location:"Unfortunately, we could not find any posts close to you."}</label>
            {
            values.posts.length > 0 &&
            values.posts.map((p, i) => (
                <Col xs={6} className="makeCenter">
                <PostCard
                    user_id={false}
                    post_id={p.post_id}
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

export default NearByMe