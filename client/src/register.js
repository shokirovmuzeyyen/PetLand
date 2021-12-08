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
import { config } from './config';
import Select from 'react-select'

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
    errors.phone = "Phone required"
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
    password2: ''
  });

  const Districts= [
    { value: "ADALAR", label: "ADALAR" },
    { value: "ARNAVUTKÖY", label: "ARNAVUTKÖY" },
    { value: "ATAŞEHİR", label: "ATAŞEHİR" },
    { value: "AVCILAR", label: "AVCILAR" },
    { value: "BAĞCILAR", label: "BAĞCILAR" },
    { value: "BAHÇELİEVLER", label: "BAHÇELİEVLER" },
    { value: "BAKIRKÖY", label: "BAKIRKÖY" },
    { value: "BAŞAKŞEHİR", label: "BAŞAKŞEHİR" },
    { value: "BAYRAMPAŞA", label: "BAYRAMPAŞA" },
    { value: "BEYKOZ", label: "BEYKOZ" },
    { value: "BEYLİKDÜZÜ", label: "BEYLİKDÜZÜ" },
    { value: "BEYOĞLU", label: "BEYOĞLU" },
    { value: "BÜYÜKÇEKMECE", label: "BÜYÜKÇEKMECE" },
    { value: "ÇATALCA", label: "ÇATALCA" },
    { value: "ÇEKMEKÖY", label: "ÇEKMEKÖY" },
    { value: "ESENLER", label: "ESENLER" },
    { value: "ESENYURT", label: "ESENYURT" },
    { value: "EYÜPSULTAN", label: "EYÜPSULTAN" },
    { value: "FATİH", label: "FATİH" },
    { value: "GAZİOSMANPAŞA", label: "GAZİOSMANPAŞA" },
    { value: "GÜNGÖREN", label: "GÜNGÖREN" },
    { value: "KADIKÖY", label: "KADIKÖY" },
    { value: "KAĞITHANE", label: "KAĞITHANE" },
    { value: "KARTAL", label: "KARTAL" },
    { value: "KÜÇÜKÇEKMECE", label: "KÜÇÜKÇEKMECE" },
    { value: "MALTEPE", label: "MALTEPE" },
    { value: "KÜÇÜKÇEKMECE", label: "KÜÇÜKÇEKMECE" },
    { value: "PENDİK", label: "PENDİK" },
    { value: "SANCAKTEPE", label: "SANCAKTEPE" },
    { value: "SARIYER", label: "SARIYER" },
    { value: "SİLİVRİ", label: "SİLİVRİ" },
    { value: "SULTANBEYLİ", label: "SULTANBEYLİ" },
    { value: "SULTANGAZİ", label: "SULTANGAZİ" },
    { value: "ŞİLE", label: "ŞİLE" },
    { value: "ŞİŞLİ", label: "ŞİŞLİ" },
    { value: "TUZLA", label: "TUZLA" },
    { value: "ÜMRANİYE", label: "ÜMRANİYE" },
    { value: "ÜSKÜDAR", label: "ÜSKÜDAR" },
    { value: "ZEYTİNBURNU", label: "ZEYTİNBURNU" }
  ]

  const handleChangeAddress = e => {
      const p_value = e.value;
      setValues({
        ...values,
        ["address"] : p_value
      });
      values.address = e.value;
    };

  const [errors, setErrors] = useState('');
  const [backend_error, setbackendError] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

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
    Axios.post(`${config.SERVER_URI}/api/register`,
    {
      name:values.name,
      email:values.email,
      phone:values.phone,
      address:values.address.toLowerCase(),
      password:values.password
    }).then(response => {
      if (!response){
        console.log("no error");
      }
      setIsSubmitted(true);
      history.push("/login");
    }).catch(error => {
        console.log(error.response);
        let err = error.response.data.errors[0].msg;
        console.log(err);
        if (err){
          console.log(err);
          setbackendError(err);
          setValues({
            name: '',
            email: '', 
            phone: '',
            address: '',
            password:'',
            password2: ''
          });
          err ='';
        }
        else{
          setbackendError('');
          history.push("/login");
          setIsSubmitted(true);
      }});
  };

 

 

  return (
    <div className="App">
      <Card style={{height:"100vh", overflow: "auto"}} className="bg-dark">
      <div className="register-form"> 
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
              type="number"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-danger">{errors.phone}</p>}
          </FormGroup>
          <FormGroup>
            <Label className="text-white">Address (District)</Label>
            <Select options={Districts} value={Districts[values.address]}
                  onChange={handleChangeAddress}></Select>
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
            {errors.password2 && <p className="text-danger">{errors.password2}</p>}\
          </FormGroup>

        <div className="row justify-content-evenly">
          <div className="col-6">
            <Button>Register</Button>
          </div>
        
          <div className="col-3 makeCenter">
            <label className="text-danger">Already have an account?</label>
          </div>
          <div className="col-3 makeCenter">
            <Button className="ml-1" onClick={()=> {history.push("/login");}}>Login</Button>
          </div>
        {backend_error && <h3 className="text-white text-center">{backend_error}</h3>}
        </div> 
        </Form>
        </div>
        </Card>
        </div>
  );
}

export default Register;
