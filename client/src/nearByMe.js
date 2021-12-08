import './App.css';
import React, { useState, useEffect} from 'react'
import Axios from 'axios';

import { config } from './config';
import useToken from './useToken';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostCard from './PostCard';
import bg from './assets/green_bg.jpg';
import NavBar from './components/NavBar/NavBar';

const NearByMe = () => {
  const [values, setValues] = useState({
    posts: {}
  });
  const tokenString = sessionStorage.getItem('token');
  async function getData(){
    console.log("in getData()");
  
    Axios.post('http://localhost:8000/api/nearByMe',
  //Axios.post(`${config.SERVER_URI}/api/nearByMe`,
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
        backgroundImage: `url(${bg})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', height:"100%"}}>
        <NavBar/>
        
        <div style={{ 
            backgroundImage: `url(${bg})`,  backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' }} className="makeCenter">
        <Row style={{marginTop: "3%"}}>
            <label className="makeCenter" style={{marginBottom: "2%", textTransform: 'uppercase', color:'white', fontSize:"18px"}}>{values.posts.length > 0 ?"You are seeing the post that are near by you: " + values.posts[0].location:"Unfortunately, we could not find any post close to you."}</label>
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

export default NearByMe
