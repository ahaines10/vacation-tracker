import { useState } from "react";
import CommentEditForm from "../CommentEditForm/CommentEditForm";
import "./Comments.css";
export default function Comments({
  comment,
  vid,
  deleteComment,
  updateComment,
}) {
  const [editButton, setEditButton] = useState(false);
  return (
    <>
      {editButton ? (
        <>
          <CommentEditForm
            key={comment._id}
            vid={vid}
            comment={comment}
            updateComment={updateComment}
            setEditButton={setEditButton}
            editButton={editButton}
          />

          <button onClick={() => setEditButton(!editButton)}>cancel</button>
        </>
      ) : (
        <>
          <div className="comment">
            <div>{comment.content}</div>
            <button onClick={() => deleteComment(vid, comment._id)}>
              Delete
            </button>
            <button onClick={() => setEditButton(!editButton)}>Edit</button>
          </div>
        </>
      )}
    </>
  );
}
