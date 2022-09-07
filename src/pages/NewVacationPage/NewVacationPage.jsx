import { useState } from "react";
export default function NewVacationPage({ addVacation }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    location: "",
    activities: "",
    pricing: 0,
  });

  function handleAddVacation(evt) {
    evt.preventDefault();
    addVacation(formData);
    setFormData({
      name: "",
      image: "",
      location: "",
      activities: "",
      pricing: 0,
    });
  }
  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  return (
    <form onSubmit={handleAddVacation}>
      <label>Vacation</label>
      <input
        value={formData.name}
        onChange={handleChange}
        placeholder="Vacation Name"
        required
        name="name"
      />
      <input
        value={formData.image}
        onChange={handleChange}
        placeholder="image"
        required
        name="image"
      />
      <input
        value={formData.location}
        onChange={handleChange}
        placeholder="location"
        required
        name="location"
      />
      <input
        value={formData.activities}
        onChange={handleChange}
        placeholder="activities"
        required
        name="activities"
      />
      <input
        value={formData.pricing}
        onChange={handleChange}
        placeholder="pricing"
        required
        name="pricing"
      />

      <button value="submit">ADD VACATION</button>
    </form>
  );
}
