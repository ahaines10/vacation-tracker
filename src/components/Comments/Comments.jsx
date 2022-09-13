import { useState } from "react";
import CommentEditForm from "../Comments/Comments";
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
          />

          <button onClick={() => setEditButton(!editButton)}>cancel</button>
        </>
      ) : (
        <>
          <div>{comment.content}</div>
          <button onClick={() => deleteComment(vid, comment._id)}>
            Delete
          </button>
          <button onClick={() => setEditButton(!editButton)}>Edit</button>
        </>
      )}
    </>
  );
}
