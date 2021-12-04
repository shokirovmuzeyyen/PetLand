import './App.css';
import React, {useState, useEffect} from 'react';
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
import axios from 'axios';


export default function Search(){
  const {searchTerm, setSearchTerm} = useState('')
  const {posts, setPosts} = useState([])
  useEffect(() => {
    axios.post('http://localhost:8000/api/search_all')
    .then((response) => {
    console.log(response.data);
    setPosts(response.data);
    })
  }, [])

  
  return (
    <div className="search">
      <input 
      type="text" 
      placeholder="Search..." 
      onChange={event => {setSearchTerm(event.target.value)}}/>
      {posts.map((val)=> {
        return <div key={val.id}>
          <p>{val.name}</p>
        </div>
        
      })}
      </div>
  );
}