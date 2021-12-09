import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import "./Comment.css";
import { config } from '../../config';
import Card from 'react-bootstrap/Card';

const Comments = ({ post_id }) => {
  const [values, setValues] = useState({
    comments: {},
  });
  const [activeComment, setActiveComment] = useState(null);

  const getComments= (post_id) => {
    Axios.post('http://localhost:8000/api/get_comments',
    {
      id: post_id, 
    }).then( response => {
      if (response){
      console.log(response);
      handleChangeComments(response.data.comments);
      }
    }).catch(error => {
      console.log("error in");
      console.log(error.response);
    });
  }

  const handleChangeComments = (comments) => {
    setValues({
      ...values,
      ["comments"] : comments.sort((a, b) => new Date(a.ts).getTime()),
    });
   // values.comments = comments;    
  };

  useEffect(() => {
    getComments(post_id);
  }, []);

  const addComment = (text) => {
    console.log("add Comment");
    Axios.post('http://localhost:8000/api/add_comment',
    {      
      user_id: sessionStorage.getItem('token'), 
      post_id: post_id, 
      ts: new Date().toLocaleString() + "", 
      comment: text,  

    }).then( response => {
      if (response){
      console.log(response);
      handleChangeComments(response.data.comments);
      setActiveComment(null);
      }
    }).catch(error => {
      console.log("error in");
      console.log(error.response);
    });
  };

  const updateComment = (text, comment_id) => {
    console.log("Update Comment");
    Axios.post('http://localhost:8000/api/edit_comment',
    {
      comment: text,
      id: comment_id, 
      post_id: post_id
    }).then( response => {
      if (response){
      console.log(response);
      handleChangeComments(response.data.comments);
      setActiveComment(null);
      }
    }).catch(error => {
      console.log("error in");
      console.log(error.response);
    });
  };


  const deleteComment = (commentId) => {
    console.log("Delete Comment") 
    if (window.confirm("Are you sure you want to remove comment?")) {
      Axios.post('http://localhost:8000/api/delete_comment',
      {
        id: commentId, 
        post_id: post_id
      }).then( response => {
        if (response){
        console.log(response);
        handleChangeComments(response.data.comments);
        setActiveComment(null);
        }
      }).catch(error => {
        console.log("error in");
        console.log(error.response);
     });
    }
  
  };

  
  return (
    <div>
    <Card border="danger" bg={"light".toLowerCase()}
        text={"light" === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
        className="mb-2" style={{ width: '30rem', height: "800px" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title className="makeCenter postTitle" style={{fontSize:28, textTransform: 'uppercase'}}>Comments</Card.Title>
          <br/>
        <Card.Text>
          
      <div>
    <div className="comments">
      <div className="comment-form-title">Leave a comment</div>
      <CommentForm submitLabel="Write"  handleSubmit={addComment}  />
      <div className="comments-container">
        {values.comments.length > 0 &&
         values.comments.map((c,i) => (
          <Comment
            comment_id= {c.comment_id}
            text={c.comment}
            user_id={c.user_id}
            post_id={c.post_id}
            ts={c.ts}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
          />
        ))}
      </div>
    </div>
    
    </div>
              
              </Card.Text>
                
              </Card.Body>
          </Card>
      </div>
  );
};
export default Comments