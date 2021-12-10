import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import bg from './assets/bg.jpg';
import {
  Form,
  FormGroup,
  Input,
} from 'reactstrap';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { config } from './config';
import NavBar from './components/NavBar/NavBar';

function ChangePassword() {
  const tokenString = sessionStorage.getItem('token');
  const [backend_error, setbackendError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    changePassword();
  }

  const changePassword = () => {
    Axios.put(`${config.SERVER_URI}/api/change-password`,
        {
          email: email,
          password: oldPassword,
          new_password: newPassword,
          user_id: tokenString
        },
      )
    .then(response => {
      setIsSubmitted(true);
      history.push("/feed");
    }).catch(error => {
        let err = error.response.data.errors[0].msg;
        if (err){
          console.log(err);
          setbackendError(err);
          history.push("/changePassword");
          err ='';
        }
        else{
          setbackendError('');
          history.push("/feed");
          setIsSubmitted(true);
      }});
    }

  return (
    <div>
      <NavBar/>
      <div style={{ backgroundImage: `url(${bg})`, display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        
        <Card border="danger" bg={"light".toLowerCase()}
          text={"light" === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2" style={{ width: '50rem', height: '44rem' }}>
          <Form className="form" onSubmit={handleSubmit}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title className="makeCenter" style={{fontSize:28}}>Change Your Password</Card.Title>
            <br/>
            <Row>
              <Col>
              <FormGroup>
                  <Input
                    type="email"
                    placeholder="Type email..."
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    placeholder="Old Password..."
                    onChange={(event) => {
                      setOldPassword(event.target.value);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                     type="password"
                     placeholder="New Password..."
                     onChange={(event) => {
                       setNewPassword(event.target.value);
                     }}
                  />
                </FormGroup>
              </Col>            
            <Row className="justify-content-evenly">
              <Col className='makeCenter'>
                <Button variant="danger" size="lg" onClick={()=> {history.push("/feed");}}>CANCEL</Button>
              </Col>
              <Col className='makeCenter'>
                <Button variant="success" size="lg" type="submit">CHANGE</Button>
              </Col>
              {backend_error && <h3 className="text-black text-center">{backend_error}</h3>}
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
export default ChangePassword;