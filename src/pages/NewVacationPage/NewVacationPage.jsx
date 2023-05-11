import { useState } from "react";
import "./NewVacationPage.css";
export default function NewVacationPage({ addVacation }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    location: "",
    activities: "",
    pricing: 0,
  });

  function handleAddVacation(evt) {
    console.log("vacation");
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
    <div className="form-container new-vacation-page">
      <form onSubmit={handleAddVacation}>
        <h2 className="dark"> New Vacation</h2>
        <div className="margin">
          <input
            value={formData.name}
            onChange={handleChange}
            placeholder="Vacation Name"
            required
            name="name"
          />
        </div>
        <div className="margin">
          <input
            value={formData.image}
            onChange={handleChange}
            placeholder="image"
            required
            name="image"
          />
        </div>
        <div className="margin">
          <input
            value={formData.location}
            onChange={handleChange}
            placeholder="location"
            required
            name="location"
          />
        </div>
        <div className="margin">
          <input
            value={formData.activities}
            onChange={handleChange}
            placeholder="activities"
            required
            name="activities"
          />
        </div>
        <div className="margin">
          <input
            value={formData.pricing}
            onChange={handleChange}
            placeholder="pricing"
            required
            name="pricing"
          />
        </div>
        <button value="submit">ADD VACATION</button>
      </form>
    </div>
  );
}
