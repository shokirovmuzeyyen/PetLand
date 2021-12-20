import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { config } from './config';
import useToken from './useToken';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostCard from './postCard';
import bg from './assets/bg.jpg';
import NavBar from './components/NavBar/NavBar';
import Select from 'react-select'
import { useHistory, Redirect } from "react-router-dom";

export default function Search(){
  const history = useHistory();
  const tokenString = sessionStorage.getItem('token');
  const [values, setValues] = useState({
    posts: {},
    search_name: '',
    search_location: '',
    search_breed: '',
    message: ''
  });
  
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

  const breedOptions = [
    { value: 'cat', label: 'Cat' },
    { value: 'dog', label: 'Dog' },
    { value: 'bird', label: 'Bird' }
  ]

  const handleChangeAddress = e => {
    const p_value = e.value;
    setValues({
      ...values,
      ["search_location"] : p_value
    });
    values.search_location = e.value;
  };

  function Reset(){

    history.go(0);
  }
  const handleChangeBreed = e => {
    const p_value = e.value;
    setValues({
      ...values,
      ["search_breed"] : p_value
    });
    values.search_breed = e.value;
  };

  async function getData(){
    Axios.post(`${config.SERVER_URI}/api/search`,
    {
      search_breed: '%' + (values.search_breed).toLowerCase() + '%',
      search_name: '%' + (values.search_name).toUpperCase() + '%' ,
      search_location: '%' + (values.search_location).toLowerCase() + '%' 
    }).then( response => {
      console.log(response);
      handleChangePosts(response.data.posts);
    }).catch(error => {
      console.log(error.response);
      let err = error.response.data.errors[0].msg;
      console.log(err);
    });

    setValues({
      ...values,
      ["message"] : "Sorry, we could not find any post as you searched."
    });
    values.message = "Sorry, we could not find any post as you searched.";
  }
  function handleSubmit(e){
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    });
    e.preventDefault();
    
    getData();    
  };
  const handleChangePosts = (e) => {
    setValues({
      ...values,
      ["posts"] : e
    });
    values.posts = e;
    };
  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    });
  };
  return (
    <div style={{ 
      backgroundImage: `url(${bg})`,  backgroundPosition: 'center',
      height:"100%"}}>
      <NavBar/>
      
      <Form onSubmit={handleSubmit}>
        <Row className="makeCenter">
          <Col md={3} >
          <FormGroup>
            <label>Breed</label>
            <Select options={breedOptions} value={breedOptions[values.search_breed]}
              onChange={handleChangeBreed}></Select>
          </FormGroup>
          </Col>
          <Col md={3} className="my-1">
          <FormGroup>
            <label>Name</label>
          <Input
                name="search_name"
                id="search_name"
                value={values.search_name}
                onChange={handleChange}
              />
          </FormGroup>
          </Col>
          <Col md={3} className="my-1">
          <FormGroup>
            <label>Location</label>
          <Select options={Districts} value={Districts[values.search_location]}
                    onChange={handleChangeAddress}></Select>
          </FormGroup>
          </Col>
          <Col md={1} className="my-1">
          <Button className="makeCenter btn btn-success" variant="success" size="lg" type="submit">Search</Button>
          </Col>
          <Col md={1} className="my-1">
          <Button className="makeCenter btn btn-danger" variant="danger" size="lg" onClick={Reset}>Reset</Button>
          </Col>
        </Row>
      </Form>
      
      <div style={{ 
        backgroundImage: `url(${bg})`,  backgroundPosition: 'center',
      }} className="makeCenter">
      <Row>
        {
          values.posts.length > 0 ?
          values.posts.map((p, i) => (
            <Col xs={6} className="makeCenter">
              <PostCard
                user_id={tokenString==p.user_id}
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
          )) : <h2>{values.message}</h2>
        }
        </Row>
      </div>
      </div>

  );
}