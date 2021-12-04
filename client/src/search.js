import './App.css';
import React, {useState} from 'react';
import { useHistory, Redirect } from "react-router-dom";
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
import PropTypes from 'prop-types';
import useToken from './useToken';

async function get_username(user_id){
  console.log("in");
  Axios.post('http://localhost:8000/api/search',
  {
    id: user_id,
  }).then((response) => {
    const name = response.data.name;
    console.log("name:", name);
    if (!response){
      console.log("no error");
    }
    else{
      console.log(response);
    }
    return name;
    }).catch(error => {
      console.log(error);
      let err = error.response.data.errors[0].msg;
      console.log(err);
  });
}


export default async function Search(){
    const user_id = sessionStorage.getItem('token');  
    console.log(user_id);
    let name = await get_username(user_id);
    console.log(name);
    return (
      <div>
        <h1>{name}</h1>
      </div>
      );
}