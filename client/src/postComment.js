import React, {useState, useEffect}from 'react'
import NavBar from './components/NavBar/NavBar';
import bg from './assets/bg.jpg';
import PostCard from './postCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Axios from 'axios';
import { config } from './config';
import { useLocation } from "react-router-dom";
import Comments from './components/Comment/Comments';


function PostComment(props) {
  const location = useLocation();
  const [values, setValues] = useState({
    posts: {},
    comments: {},
  });
    
    
  const getData= (post_id) => {
    Axios.post(`${config.SERVER_URI}/api/post`,
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
    Axios.post(`${config.SERVER_URI}/api/comment`,
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
    console.log(post_id);
    getData(post_id);
   },[]);
  return (
      <div style={{  
        backgroundImage: `url(${bg})`, backgroundSize: "cover",  backgroundRepeat: 'no-repeat', backgroundPosition: "center", height:"100%"}}>
       <NavBar/>
         <Row > 
         <div className="makeCenter" style={{ padding:"20px",
        backgroundImage: `url(${bg})`, backgroundSize: "cover",  backgroundRepeat: 'no-repeat', backgroundPosition: "center", height:"100%"}}>
           <div >

           <Row>
          {
            values.posts.length > 0 &&
            values.posts.map((p, i) => (
              <div >
              <Col xs={12} className="makeCenter">
                
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
                
                 <Comments 
                    post_id={p.post_id}/>
              </Col>
              </div>
            ))
          }
          </Row>
        </div>
        </div>
      </Row>
  </div>

  )
}

export default PostComment


