import React, { useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { config } from './config';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import PostCard from './PostCard';
import bg from './assets/trees.jpeg';
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
    values.namee = e;    
    };

  const getRepo = () => {
    Axios.post(`${config.SERVER_URI}/api/get-posts`,
    //Axios.post('http://localhost:8000/api/get-posts',
    {
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
