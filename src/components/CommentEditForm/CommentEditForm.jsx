import { useState } from "react";
export default function CommentsForm({
  updateComment,
  vid,
  comment,
  editButton,
  setEditButton,
}) {
  const [formData, setFormData] = useState({
    content: comment.content,
    rating: comment.rating,
  });

  function handleUpdateComment(evt) {
    evt.preventDefault();
    updateComment(formData, vid, comment._id);
    setEditButton(!editButton);
  }
  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  return (
    <form onSubmit={handleUpdateComment}>
      <label>Vacation</label>
      <input
        value={formData.content}
        onChange={handleChange}
        placeholder="comment"
        required
        name="content"
      />

      <input
        value={formData.rating}
        onChange={handleChange}
        placeholder="rating"
        required
        pattern="[1-5]"
        name="rating"
      />

      <button value="submit">Update comment</button>
    </form>
  );
}
