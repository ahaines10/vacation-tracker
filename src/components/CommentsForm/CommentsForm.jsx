import { useState } from "react";
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
    <form onSubmit={handleAddComment}>
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

      <button value="submit">ADD comment</button>
    </form>
  );
}
