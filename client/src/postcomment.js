import React, {useState, useEffect}from 'react'
import NavBar from './components/NavBar/NavBar';
import bg from './assets/green_bg.jpg';
import PostCard from './PostCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Axios from 'axios';
import { config } from './config';
import { useLocation } from "react-router-dom";


function PostComment(props) {
  const location = useLocation();
  const [values, setValues] = useState({
    posts: {},
    comments: {},
  });
    
    
  const getData= (post_id) => {
    Axios.post('http://localhost:8000/api/post',
    {
      id: post_id, 
    }).then( response => {
      
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

  const handleChangePosts = (posts) => {
    setValues({
      ...values,
      ["posts"] : posts,
    });
    values.posts = posts;
  };

  const handleChangeComments = (comments) => {
    setValues({
      ...values,
      ["comments"] : comments,
    });
    values.comments = comments;    
  };


  const getComments= (post_id) => {
    Axios.post('http://localhost:8000/api/comment',
    {
      id: post_id, 
    }).then( response => {
      if (response){
      console.log(response);
      handleChangeComments(response.data.comments);
      }
    }).catch(error => {
      console.log("error in");
      console.log(error.response);
    });
  }


  useEffect(()=> {
    const post_id = location.state;
    getData(post_id);
    getComments(post_id);
   },[]);
  return (
      <div style={{ 
        backgroundImage: `url(${bg})`, backgroundSize: "cover",  backgroundRepeat: 'no-repeat', backgroundPosition: "center", height:"100%"}}>
       <NavBar/>
         <Row style={{padding: '20px' }}> 
         <div className="makeCenter">
           <div>
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
                  post_id={p.post_id}
                />
              </Col>
            ))
          }
          </Row>
            </div>
            <div>
          <p>Comments</p>
          </div>
          </div>
          </Row> 
        </div>
  )
}

export default PostComment


