import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { config } from './config';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import PostCard from './postCard';
import bg from './assets/bg.jpg';
import NavBar from './components/NavBar/NavBar';

const MyPosts = () => {
 
  const [values, setValues] = useState({
    posts: {},
  });
  const history = useHistory();
  const [setbackendError] = useState('');
  const [setIsSubmitted] = useState(false);

  const handleChangePosts = (posts) => {
    setValues({
      ...values,
      ["posts"] : posts,
    });
    values.posts = posts;  
  };

  const getRepo = (current_user_id) => {
    Axios.post(`${config.SERVER_URI}/api/get-user-favorites`,
    {
      user_id: current_user_id
    }).then(res => {
      handleChangePosts(res.data.posts);
    }).catch(error => {
        console.log(error);
        let err = error.response.data.errors[0].msg;
        if (err){
        }
        else{
          setbackendError('');
          history.push("/feed");
          setIsSubmitted(true);
      }});
  }
  useEffect(()=> {
    const current_user_id = parseInt(sessionStorage.getItem('token') , 10 );  
    getRepo(current_user_id)
  }
  ,[]);
  return (
    <div style={{ 
      backgroundImage: `url(${bg})`,  backgroundPosition: 'center', paddingBottom:"50%"}}>
      <NavBar/>
          <Row style={{marginTop: "3%"}}>
          <label className="makeCenter" style={{marginBottom: "2%", textTransform: 'uppercase', color:'black', fontSize:"18px"}}>{values.posts.length > 0 ? "The announcements that you have favorited so far" : "You have not any favorite post yet."}</label>          
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
  )
}

export default MyPosts
