import CommentForm from "./CommentForm";
import Comments from "./Comments";
import './Comment.css';
import { config } from '../../config';
import postcomment from "../../postComment";
import { useEffect } from "react";
import Axios from 'axios';
import { useState } from "react";

const Comment = ({comment_id, text, user_id, post_id, ts, 
  activeComment, setActiveComment, deleteComment, updateComment}) => {
  const get_current_user = () => {
    return sessionStorage.getItem('token');
  }
  const current_user_id = parseInt(get_current_user() , 10 ) ;  
  const isEditing =
  activeComment &&
  activeComment.id === comment_id &&
  activeComment.type === "editing";
  const canDelete = current_user_id === user_id;
  const canEdit = current_user_id === user_id;
  const createdAt = new Date(ts).toLocaleDateString();
  const [name, setName] = useState("");

  const get_username = (user_id) => {
      Axios.post('http://localhost:8000/api/get_username',
      {
        id: user_id, 
      }).then( response => {
        if (response){
        console.log(response);
        setName(response.data.name);
        }
      }).catch(error => {
        console.log("error in");
        console.log(error.response);
     });
    };


  useEffect(() => {
    
    get_username(user_id);
  }, []);

  return(
    <div className="comment"  >
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{name}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{text}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={text}
            handleSubmit={(text) => updateComment(text, comment_id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canEdit && (
            <div className="comment-action" 
            onClick={() => setActiveComment({id:comment_id, type:"editing"})}>
            Edit
            </div>)}
          {canDelete && (
            <div className="comment-action"  
            onClick={() => deleteComment(comment_id)}>
            Delete
            </div>
            )}
        </div>
        
       
        
        </div>
        </div>
  );
}

export default Comment