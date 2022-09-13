import { useState } from "react";
export default function CommentsForm({ updateComment, vid, comment }) {
  const [formData, setFormData] = useState({
    content: "",
    rating: 0,
  });

  function handleUpdateComment(evt) {
    evt.preventDefault();
    updateComment(formData, vacation._id);
    setFormData({
      content: comment.content,
      rating: comment.rating,
    });
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
