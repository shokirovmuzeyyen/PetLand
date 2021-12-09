import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import bg from './assets/bg.jpg';
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
import Select from 'react-select'

function validateInfo(values) {
  console.log("validate")
  let errors = {}
  if (!values.name.trim()){
    errors.name = "Cannot leave name empty"
  }
  if (!values.email.trim()){
    errors.email = "Cannot leave email empty"
  }
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
    errors.email = "Invalid email"
  }

  if (!values.address.trim()){
    errors.address = "Cannot leave address empty"
  }

  return errors;
}

const Settings = () => {
  const tokenString = sessionStorage.getItem('token');

  const [backend_error, setbackendError] = useState('');
  const [errors, setErrors] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const Districts = [
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

  const handleChangeUserInfo = e => {
    console.log(e);
    const {name, value} = e;
    setValues({
      ...values,
      [name] : value
    });
    values.name = e.name;
    values.email = e.email;
    //values.address = e.address;
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

  const handleChangeAddress = e => {
    const p_value = e.value;
    setValues({
      ...values,
      ["address"] : p_value
    });
    values.address = e.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateInfo(values))
    if (errors === {}) {
      console.log("no error")
    }
    updateUser();
  }

  const updateUser = () => {
    Axios.post(`${config.SERVER_URI}/api/update-user`,
    {
      name: values.name,
      email: values.email,
      address: values.address.toLowerCase(),
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
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

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
      <div style={{ backgroundImage: `url(${bg})`, display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        
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
                    placeholder={values.name}
                    onChange= {handleChange}
                  />
                  {errors.name && <p className="text-danger">{errors.name}</p>}
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
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </FormGroup>
                <FormGroup>
                  <Label className="createPostTitle makeCenter">Address</Label>
                  <Select options={Districts} value={Districts[values.search_location]}
                    onChange={handleChangeAddress}></Select>
                  {errors.address && <p className="text-danger">{errors.address}</p>}
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
                  {errors.phone && <p className="text-danger">{errors.phone}</p>}
                </FormGroup>
              </Col>            
            <Row className="justify-content-evenly">
              <Col className='makeCenter'>
                <Button variant="danger" size="lg" onClick={()=> {history.push("/feed");}}>CANCEL</Button>
              </Col>
              <Col className='makeCenter'>
                <Button variant="success" size="lg" type="submit">UPDATE</Button>
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

export default Settings
