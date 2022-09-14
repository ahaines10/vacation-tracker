import { useState } from "react";
import "./CommentsForm";
export default function CommentsForm({ addComment, vacation }) {
  const [formData, setFormData] = useState({
    content: "",
    rating: 0,
  });

  function handleAddComment(evt) {
    evt.preventDefault();
    addComment(formData, vacation._id);
    setFormData({
      content: "",
      rating: 1,
    });
  }
  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  return (
    <form onSubmit class={handleAddComment}>
      <input
        value={formData.content}
        onChange={handleChange}
        placeholder="comment"
        required
        name="content"
      />
      <br></br>
      <button value="submit">ADD comment</button>
    </form>
  );
}
