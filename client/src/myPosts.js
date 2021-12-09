import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { config } from './config';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import PostCard from './PostCard';
import bg from './assets/bg.jpg';
import NavBar from './components/NavBar/NavBar';

const MyPosts = () => {
  const tokenString = sessionStorage.getItem('token');
  const [values, setValues] = useState({
    namee: {}
  });
  const history = useHistory();
  const [setbackendError] = useState('');
  const [setIsSubmitted] = useState(false);

  const handleChangePosts = (e) => {
    console.log("e is "+ e);
    setValues({
      ...values,
      ["namee"] : e
    });
    values.namee = e;    
    };

  const getRepo = () => {
    Axios.post(`${config.SERVER_URI}/api/get-user-posts`,
    {
      user_id: tokenString
    }).then(res => {
      handleChangePosts(res.data.posts);
    }).catch(error => {
        console.log(error.response);
        let err = error.response.data.errors[0].msg;
        console.log(err);
        if (err){
        }
        else{
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
            backgroundImage: `url(${bg})`,  backgroundPosition: 'center',
            height: "100%"}} className="makeCenter">
          <Row style={{marginTop: "3%"}}>
          <label className="makeCenter" style={{marginBottom: "2%", textTransform: 'uppercase', color:'black', fontSize:"18px"}}>The announcements that you have posted so far</label>
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
                  post_id = {p.post_id}
                />
              </Col>
            ))
          }
          </Row>
      </div>
    </div>
  )
}

export default MyPosts
