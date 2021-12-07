import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import {
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { config } from './config';
import NavBar from './components/NavBar/NavBar';

function validateInfo(values) {
  let errors = {}
  if (!values.name.trim()){
    errors.name = "Cannot leave name empty"
  }
  if (!values.email.trim()){
    errors.email = "Email required"
  }
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
    errors.email = "Email address is invalid"
  }

  if (!values.phone.trim()){
    errors.phone = "Cannot leave phone empty"
  }
  return errors;
}

const Profile = () => {
  const tokenString = sessionStorage.getItem('token');

  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const [setbackendError] = useState('');
  const [errors, setErrors] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const handleChangeUserInfo = e => {
    console.log(e);
    const {name, value} = e;
    setValues({
      ...values,
      [name] : value
    });
    values.name = e.name;
    values.email = e.email;
    values.address = e.address;
    values.phone = e.phone;
    console.log(values.name);
  };

  const handleChange = e => {
    console.log(e);
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateInfo(values))
    updateUser();
  }

  const updateUser = () => {
    Axios.post(`${config.SERVER_URI}/api/update-user`,
    {
      name: values.name,
      email: values.email,
      address: values.address,
      phone: values.phone,
      user_id: tokenString
    }).then(response => {
      setIsSubmitted(true);
      history.push("/feed");
    }).catch(error => {
        let err = error.response.data.errors[0].msg;
        if (err){
          console.log(err);
          setbackendError(err);
          setValues({
            name: '',
            email: '',
            address: '',
            phone: '',
          });
          err ='';
        }
        else{
          setbackendError('');
          history.push("/feed");
          setIsSubmitted(true);
      }});
  }
  const getInfo = () => {
    Axios.post(`${config.SERVER_URI}/api/get-user-info`,
    {
      user_id: tokenString
    }).then(res => {
      handleChangeUserInfo(res.data.info[0]);
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
    getInfo()
  ,[]);
  return (
    <div>
      <NavBar/>
      <div style={{ backgroundImage: `url(https://st.depositphotos.com/2015673/4034/v/950/depositphotos_40343767-stock-illustration-forest-landscape.jpg)`, display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        
        <Card border="danger" bg={"light".toLowerCase()}
          text={"light" === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2" style={{ width: '50rem', height: '44rem' }}>
          <Form className="form" onSubmit={handleSubmit}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title className="makeCenter" style={{fontSize:28}}>Update Your Information</Card.Title>
            <br/>
            <Row>
              <Col>
                <FormGroup>
                  <Label className="createPostTitle makeCenter">Name</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange= {handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="createPostTitle makeCenter">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="createPostTitle makeCenter">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    value={values.address}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="createPostTitle makeCenter">Phone</Label>
                  <Input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>            
            <Row >
              <Col >
                <Button className="makeCenter" variant="danger" size="lg" onClick={()=> {history.push("/feed");}} style={{marginRight:10}}>CANCEL</Button>
              </Col>
              <Col >
                <Button className="makeCenter" variant="success" size="lg" type="submit">UPDATE</Button>
              </Col>
            </Row></Row>
          <Card.Text>
          </Card.Text>
          </Card.Body>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Profile
