import React, { useState, useEffect} from 'react'
import Navbar from "./components/NavBar/NavBar";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useHistory, Redirect } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Axios from 'axios';
import { config } from './config';

const PostCard = ({ user_id, post_id, name, breed, age, location, extra_info, p_image, vaccinated, ts }) => {
  const history = useHistory();
  //const tokenString = sessionStorage.getItem('token');
  const current_user_id = parseInt(sessionStorage.getItem('token') , 10 ) ;  
  //console.log(current_user_id)
  const [values, setValues] = useState({
    favorites: {}
  });
  const [check, setCheck] = useState('');


  function handleClick(e){
    e.preventDefault();
    history.push({ 
      pathname: '/postComment',
      state: post_id
     });
  }

  function handleDelete(e){
    console.log("delete post")
    console.log(post_id)
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this post?")) {
    Axios.post(`${config.SERVER_URI}/api/delete-post`,
  {
    post_id: post_id
  }).then( response => {
    console.log(response);
    }).catch(error => {
      console.log(error.response);
      let err = error.response.data.errors[0].msg;
      console.log(err);
    });
    history.go(0);
  }
}

  function getFavorite(){
    console.log('getFavorite');
    Axios.post(`${config.SERVER_URI}/api/get-user-favorites`,
    {
      user_id: current_user_id
    }).then(res => {
      handleChangeFavorite(res.data.posts);
      console.log('Favorite1');
      for (var i = 0; i < values.favorites.length; i++) {
        if (values.favorites[i].post_id === post_id){
          setCheck(true);
          console.log('Favorite2');
          break;
        }
        else{
          setCheck(false);
          console.log('Favorite3');
        }
      };

      // values.favorites.map((p,i) => {
      //   console.log(p.post_id);
      //   console.log(post_id)
      // if (p.post_id === post_id){
      //   setCheck(true);
      // }
      // else{
      //   setCheck(false);
      // }
    //})  
    }).catch(error => {
        console.log(error.response);
        let err = error.response.data.errors[0].msg;
        console.log(err);
        if (err){
        }
        else{
          history.push("/feed");
      }});
      console.log('end getFavorite')

  }

  const handleChangeFavorite = (e) => {
    console.log("e is "+ e[0].post_id);

    setValues({
      ...values,
      ["favorites"] : e
    });
    values.favorites = e;    
  };

  function handleFavorite(e){
    console.log("fav post");
    console.log(e);
    //console.log(current_user_id, post_id);
    if (e === true){
      deleteFavorite();
      setCheck(false);
    }
    else{
      addFavorite();
      setCheck(true);
    }
  }

  function deleteFavorite(){
  console.log("delete fav");
  //console.log(current_user_id, post_id);
  Axios.post(`${config.SERVER_URI}/api/delete_favorite`,
  {
    post_id: post_id,
    user_id: current_user_id
  }).then( response => {
    console.log(response);
    handleChangeFavorite(response.data.posts.rows);
    }).catch(error => {
      console.log(error.response);
      let err = error.response.data.errors[0].msg;
      console.log(err);
    });
    history.go(0);
  }

  function addFavorite(){
  console.log("add fav");
  Axios.post(`${config.SERVER_URI}/api/add_favorite`,
  {
    post_id: post_id,
    user_id: current_user_id
  }).then( response => {
    console.log(response);
    handleChangeFavorite(response.data.posts.rows);
    }).catch(error => {
      console.log(error.response);
      let err = error.response.data.errors[0].msg;
      console.log(err);
    });
    //history.go(0);
  }


      
  useEffect(()=> 
  getFavorite()
  ,[]);


  return (
    <div>
        <Card border="danger" bg={"light".toLowerCase()}
            text={"light" === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2" style={{ width: '30rem', height: "800px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="makeCenter postTitle" style={{fontSize:28, textTransform: 'uppercase'}}>Meet with {name}</Card.Title>
              <br/>
            <Card.Text>
              
          <div>
            <Row>
              <Col><label className="postTitle">Name:</label></Col>
              <Col className="makeCenter"><label id="namee" >{name}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle">Breed:</label></Col>
              <Col className="makeCenter"><label id="breed" >{breed}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle">Age:</label></Col>
              <Col className="makeCenter"><label id="age" >{age}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle" >Location:</label></Col>
              <Col className="makeCenter"><label id="location" style={{textTransform: 'uppercase'}}>{location}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle">Vaccinated:</label></Col>
              <Col className="makeCenter"><label id="location" >{vaccinated?"Yes":"No"}</label></Col>
            </Row>
            <Row>
              <Col><label className="postTitle">Extra Info:</label></Col>
              <Col className="makeCenter"><label id="extra_info" >{extra_info?extra_info:"-"}</label></Col>
            </Row>
            <br/>
            <Row className="makeCenter">
              <img src={p_image} className="makeCenter photo"></img>
            </Row>
            <Row>
              <Col><label style={{fontSize:"10px", position: "absolute", right:0, marginRight:"10%"}} className="makeCenter" id="extra_info" >{ts.substring(0,10)}</label></Col>
            </Row>
            
            <Row className="makeCenter">

              <Col sm={2} className="my-1">
              <FormControlLabel 
                control={<Checkbox checked={check} checkedIcon={<Favorite />} onChange={(check) => handleFavorite(check)} icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
                    name="checkedH" />}
                    
                />
              </Col>

              <Col sm={2} className="my-1">
              <a href='/postComment' onClick={handleClick} className="btn btn-outline-white wow fadeInDown"><i className="far fa-comments"> </i> </a>           
              </Col>

              {user_id ?<Col sm={2} className="my-1">
              <a onClick={handleDelete}> <i class="far fa-trash-alt"></i></a>
              </Col>: ""}

            </Row>



          </div>
              
            </Card.Text>
              
            </Card.Body>
        </Card>
    </div>
    
  )
}

export default PostCard
