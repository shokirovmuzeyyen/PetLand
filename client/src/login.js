import './App.css';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';


function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',

  });

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    });
  };

  const history = useHistory();
  
  return (
    <div className="App">
      <Card style={{height:"100vh",}} className="bg-dark">
      <div className="register-form"> 
        <Form className="form" >
       
        <h2 className="text-warning text-center">Register</h2>
          
          <FormGroup>
            <Label className="text-white">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Label className="text-white">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
            />
          </FormGroup>
        <div className="row justify-content-evenly">
        <div className="col">
        <Button>Login</Button>
        </div>
        <div className="col">
        <text className="text-danger">Create an account -> </text>
        <Button className="ml-1" onClick={()=> {history.push("/register");}}>Register</Button>
        </div>
        </div> 
        </Form>
        </div>
        </Card>
        </div>
  );
}

export default Login;
