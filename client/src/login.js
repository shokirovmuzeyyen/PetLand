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
  Label,
} from 'reactstrap';

function validateInfo(values){
  let errors ={}
 
  if (!values.email){
    errors.email = "Email required"
  }
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
    errors.email = "Email address is invalid"
  }

  if (!values.password){
    errors.password = "Password is required"
  }
  return errors;
}


function Login() {
  const [errors, setErrors] = useState('');
  const history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [backend_error, setbackendError] = useState('');

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

  
  const handleSubmit = e => {
    console.log("handleSubmit");
    e.preventDefault();
    setErrors(validateInfo(values))
    if (errors==={}){
      console.log("no error");

    }
    login();
  }


  
  const login = () => {
    console.log("in");
    Axios.post("http://localhost:8000/api/login",
    {
      email:values.email,
      password:values.password
    }).then((response) => {
      if (!response){
        console.log("no error");
      }
      else{
        console.log(response);
      }
      //history.push("/feed");
      setIsSubmitted(true);
    }).catch(error => {
        console.log(error.response);
        let err = error.response.data.errors[0].msg;
        console.log(err);
        if (err){
          console.log(err);
          setbackendError(err);
          setValues({
            email: '', 
            password:'',
          });
          err ='';
        }
        else{
          setbackendError('');
          history.push("/feed");
          setIsSubmitted(true);
      }});
      }
  

  return (
    <div className="App">
      <Card style={{height:"100vh",}} className="bg-dark">
      <div className="register-form"> 
        <Form className="form"  onSubmit={handleSubmit}>
        <h2 className="text-warning text-center">Login</h2>         
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
        <div className="row justify-content-evenly">
        <div className="col">
        <Button>Login</Button>
        </div>
        <div className="col">
        <text className="text-danger">Create an account </text>
        <Button className="ml-1" onClick={()=> {history.push("/register");}}>Register</Button>
        </div>
        {backend_error && <h3 className="text-white text-center">{backend_error}</h3>}
        </div> 
        </Form>
        </div>
        </Card>
        </div>
  );
}

export default Login;
