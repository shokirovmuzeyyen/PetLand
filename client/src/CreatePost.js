import React, { Component, useState} from 'react'
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
import Select from 'react-select'
import { config } from './config';
import NavBar from './components/NavBar/NavBar';
const breedOptions = [
  { value: 'cat', label: 'Cat' },
  { value: 'dog', label: 'Dog' },
  { value: 'bird', label: 'Bird' }
]

const vaccinOptions = [
  { value: 'true', label: 'Vaccinated' },
  { value: 'false', label: 'Not Vaccinated' }
]

function validateInfo(values){
  let errors ={}
  if (!values.breed === "Select"){
    errors.name = "Breed required"
  }
  if (values.name === ""){
    errors.email = "Name required"
  }

  if (values.age === ""){
    errors.phone = "Age required"
  }

  if (values.location === ""){
    errors.phone = "Location required"
  }

  if (values.vaccinated === "Select"){
    errors.phone = "Vaccination Status required"
  }

  return errors;
}

const CreatePost = () => {
  const tokenString = sessionStorage.getItem('token');
  const [baseImage, setBaseImage] = useState("");

  const [values, setValues] = useState({
    name: '',
    breed: '',
    location: '',
    age: 0,
    p_image: '',
    extra_info: '',
    vaccinated: '',
    ts: ''
  });

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

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader  = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

    });
  };

  const handleChangeBreed = e => {
    const p_value = e.value;
    setValues({
      ...values,
      ["breed"] : p_value
    });
    values.breed = e.value;
  };

  const handleChangeVaccin = e => {
    const p_value = e.value;
    setValues({
      ...values,
      ["vaccinated"] : p_value
    });
    values.vaccinated = e.value;
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateInfo(values))
    createPost();
  }

  const createPost = () => {
    Axios.post(`${config.SERVER_URI}/api/createPost`,
    {
      name: values.name,
      breed: values.breed,
      location: values.location,
      age: values.age,
      p_image: baseImage,
      extra_info: values.extra_info,
      vaccinated: values.vaccinated,
      ts: new Date().toLocaleString() + "",
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
            breed: '',
            location: '',
            age: 0,
            p_image: '',
            extra_info: '',
            vaccinated: '',
            ts: '',
            baseImage: ''
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
            <Card.Title className="makeCenter" style={{fontSize:28}}>Let's find a home for our pet friend!</Card.Title>
            <br/>
            <Row>
              <Col>
                <FormGroup>
                <Label className="createPostTitle makeCenter">Breed</Label>
                <Select options={breedOptions} value={breedOptions[values.breed]}
                    onChange={handleChangeBreed}></Select>
                </FormGroup>
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
                  <Label className="createPostTitle makeCenter">Age</Label>
                  <Input
                    type="number"
                    name="age"
                    id="age"
                    min="0"
                    max="30"
                    value={values.age}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="createPostTitle makeCenter">Location</Label>
                  <Input
                    type="text"
                    name="location"
                    id="location"
                    value={values.location}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="createPostTitle makeCenter">Vaccination Status</Label>
                  <Select options={vaccinOptions} value={vaccinOptions[values.vaccinated]}
                    onChange={handleChangeVaccin}></Select>
                </FormGroup>
                <FormGroup>
                  <Label className="createPostTitle makeCenter">Extra Info</Label>
                  <Input
                    type="text"
                    name="extra_info"
                    id="extra_info"
                    value={values.extra_info}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            
              <Col className="makeCenter">
                <div>
                  <input type="file" onChange={(f) => {uploadImage(f);}}/>
                  <img className="photo" src={values.p_image}/>
                  <img className="photo" src={baseImage}></img>
                </div>
              </Col>
            
            <Row >
              <Col >
                <Button className="makeCenter" variant="danger" size="lg" onClick={()=> {history.push("/feed");}} style={{marginRight:10}}>CANCEL</Button>
              </Col>
              <Col >
                <Button className="makeCenter" variant="success" size="lg" type="submit">POST</Button>
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

export default CreatePost
