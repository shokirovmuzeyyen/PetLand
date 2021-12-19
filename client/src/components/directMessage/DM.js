import { useState, useEffect } from "react";
import Axios from 'axios';
import "../Comment/Comment.css";
import { config } from '../../config';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../NavBar/NavBar";
import bg from "../../assets/bg.jpg";
import {Button, Input} from 'reactstrap';
import { useHistory, useLocation} from "react-router-dom";
import DM_component from "./dm_component";

const DM = () => {
  const location = useLocation();
  const post_id = location.state;
  console.log("post id is: ", post_id);
  const history = useHistory();
  const [activeComment, setActiveComment] = useState(null);
  const [values, setValues] = useState({
    dms: {},
    conv: {},
    other_user: {},
    message: ""
  });
  const user_id = sessionStorage.getItem('token');
  
  const getDMs= () => {
    
    if (post_id)
    {
      Axios.post(`${config.SERVER_URI}/api/find_conv`,
      {
        post_id: post_id,
        user_id: user_id
      }).then( response => {
        if (response){
          console.log("post id is available, reponse: ", response);
          if(response.data.conv)
          {
            getConv(response.data.conv[0].conv_id, response.data.conv[0].user_id );
          }
          else
          {
            handleChangeOtherUser(response.data.other_user_id.rows);
          }
        }
      }).catch(error => {
        console.log("error in");
        console.log(error.response);
      });
    }
    Axios.post(`${config.SERVER_URI}/api/get_dms`,
    {
      user_id: user_id
    }).then( response => {
      if (response){
      console.log(response);
      handleChangeDMs(response.data.dms);
      }
    }).catch(error => {
      console.log("error in");
      console.log(error.response);
    });
  }

  const handleChangeDMs = (dms) => {
    setValues({
      ...values,
      ["dms"] : dms,
    });
   values.dms = dms;    
   console.log("dms: ", dms);
  };

  const getConv= (conv_id, other_user_id) => {
    console.log("getConv :: conv_id is:");
    console.log(conv_id);
    Axios.post(`${config.SERVER_URI}/api/get_dms`,
    {
      conv_id: conv_id, 
      other_user_id: other_user_id,
    }).then( response => {
      if (response){
        console.log("response: ",response);
        handleChangeConv(response.data.conv);
        if(response.data.info)
        {
          handleChangeOtherUser(response.data.info);
        }
      }
    }).catch(error => {
      console.log("error in");
      console.log(error.response);
    });

  }

  const handleChangeConv = (conv) => {
    setValues({
      ...values,
      ["conv"] : conv,
    });
    values.conv = conv;    
    console.log("conv: ", values.conv);
  };

  function handleShow(e, other_user_id){
    console.log("e is");
    console.log(e);
    getConv(e, other_user_id);
  };

  const handleChangeOtherUser = (other_user) => {
    setValues({
      ...values,
      ["other_user"] : other_user,
    });
    values.other_user = other_user; 
    console.log("other_user: ", values.other_user);
  };

  function handleSend(receiver_id){
    console.log("handle send");
    console.log(values.message,receiver_id, user_id);
    Axios.post(`${config.SERVER_URI}/api/add_dm`,
    {
      message: values.message,
      receiver_id: receiver_id,
      sender_id: user_id,
      ts: new Date().toLocaleString() + "",
    }).then( response => {
      if (response){
      console.log(response);
      setValues({
        ...values,
        ["message"] : ''
      });
      values.message = '';
      handleChangeConv(response.data.conv);
      console.log("done")
      if(response.data.info)
      {
        console.log("done2")
        handleChangeOtherUser(response.data.info);
      }
      console.log("done3")
      }
    }).catch(error => {
      console.log("error in");
      console.log(error.response);
    });

  };
  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      ["message"] : value
    });
  };

  useEffect(() => {
    console.log("other_user: " , values.other_user);
    getDMs();
  }, []);
  
  return (
    
    <div>
    <NavBar/>
          
    <div style={{ 
      backgroundImage: `url(${bg})`, paddingBottom:"50%", paddingTop:"5%"}} className="makeCenter">
      <Row>
        <Col>
          {values.dms.length > 0 &&
          values.dms.map((c,i) => (
            <Card border="danger" bg={"light".toLowerCase()}
                text={"light" === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2" style={{ width: '32rem', height: "100px" }}>
                <Card.Img variant="top" src="" />
                <Card.Body className="makeCenter">

                    <label className="makeCenter postTitle" style={{fontSize:20, textTransform: 'uppercase'}}>{c.name}</label>    
                    <Button onClick={() => handleShow(c.conv_id, c.user_id)} ></Button>
                </Card.Body>
            </Card>
          ))}
        </Col>
        <Col>
        {values.conv.length > 0 ?
          
            <Card border="danger" bg={"light".toLowerCase()}
              text={"light" === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className="mb-2" style={{ width: '32rem', height: "100%" }}>
              <Card.Img variant="top" src="" />
              <Card.Title className="postTitle makeCenter">
                {values.other_user.length > 0 ?(<h3 style={{textTransform: 'uppercase', marginTop:"5%"}}>{values.other_user[0].name}</h3>): ""}
              </Card.Title>
              <Card.Body className="makeCenter">
                <Card.Text>
                {values.conv.map((c,i) => (
                  <DM_component name = {c.name} message={c.message} ts={c.ts}></DM_component>
                ))}
                <Input
                    placeholder="Your message"
                    value={values.message}
                    onChange={handleChange}
                    style={{width: '20rem', height: "80px"}}
                  />
                <a onClick={() => handleSend(values.other_user[0].user_id)} className="btn btn-primary" style={{width: '8rem', height: "40px"}}>SEND</a>
              </Card.Text>
            </Card.Body>
          </Card>: 
          values.other_user.length>0?
          <Card border="danger" bg={"light".toLowerCase()}
              text={"light" === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className="mb-2" style={{ width: '32rem', height: "500px" }}>
              <Card.Img variant="top" src="" />
              <Card.Title className="postTitle makeCenter">
                {values.other_user.length > 0 ?(<h3 style={{textTransform: 'uppercase', marginTop:"5%"}}>{values.other_user[0].name}</h3>): ""}
              </Card.Title>
              <Card.Body className="makeCenter">
                <Card.Text>
                <Input
                    placeholder="Your message"
                    value={values.message}
                    onChange={handleChange}
                    style={{width: '20rem', height: "80px"}}
                  />
                <a onClick={() => handleSend(values.other_user[0].user_id)} className="btn btn-primary" style={{width: '8rem', height: "40px"}}>SEND</a>
              </Card.Text>
            </Card.Body>
          </Card>
          : ""
          }
        </Col>
      </Row>
    </div>
              
      </div>
  );
};
export default DM
