import './App.css';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

function validateInfo(values){
  let errors ={}
  if (!values.name.trim()){
    errors.name = "Name required"
  }
  if (!values.email.trim()){
    errors.email = "Email required"
  }
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
    errors.email = "Email address is invalid"
  }

  if (!values.phone.trim()){
    errors.email = "Phone required"
  }

  if (!values.password){
    errors.password = "Password is required"
  }
  else if (values.password.length < 6){
    errors.password = "Password needs to be 6 characters or more."
  }

  if (!values.password2){
    errors.password2 = "Password is required"
  }
  else if (values.password2 !== values.password){
    errors.password2 = "Passwords do not match"
  }
  return errors;
}

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    password2: '',

  });

  const [errors, setErrors] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    });
  };
  
  const handleSubmit = e => {
    console.log("handleSubmit");
    e.preventDefault();
    setErrors(validateInfo(values))
    if (errors==={}){
      console.log("no error");
      
    }
    register();
  }


  const register = () => {
    console.log("in");
    Axios.post("http://localhost:3001/register", 
    {
      name:values.name, 
      email:values.email, 
      phone:values.phone, 
      address:values.address, 
      password:values.password 
    }).then((response) => {
      if (!response.data.message){
        setErrors(response.data.message);
        setIsSubmitted(true);      
      }
    });
  };


  const history = useHistory();
  
  return (
    <Card style={{height:"100vh"}} className="bg-dark">
    <div className="App">
        <Form className="form" onSubmit={handleSubmit}>
        {isSubmitted ? <span>Success! Thank you for registering.</span>: null}
        <h2 className="text-warning text-center">Register</h2>
          <FormGroup>
            <Label className="text-white">Name-Surname</Label>
            <Input
              type="name"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </FormGroup>
          <FormGroup>
            <Label className="text-white">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </FormGroup>
          <FormGroup>
            <Label className="text-white">Phone Number</Label>
            <Input
              type="phone"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-danger">{errors.phone}</p>}
          </FormGroup>
          <FormGroup>
            <Label className="text-white">Address</Label>
            <Input
              type="address"
              name="address"
              id="address"
              value={values.address}
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
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </FormGroup>
          <FormGroup>
            <Label className="text-white">Password</Label>
            <Input
              type="password"
              id="password2"
              name="password2"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p className="text-danger">{errors.password2}</p>}
          </FormGroup>

        <div className="row justify-content-evenly"> 
        <div className="col">
        <Button>Register</Button>
        </div>
        <div className="col">
        <text className="text-danger">Already have an account?  </text>
        <Button className="ml-1" onClick={()=> {history.push("/login");}}>Login</Button>
        </div>
        </div>


        </Form>
        </div>
    </Card>
    
  );
}

export default Register;
