import { Link } from "react-router-dom";
import "./VacationCard.css";
export default function VacationIndexPage({ vacation }) {
  return (
    <div className="card">
      <img src={vacation.image} alt="Avatar" />
      <div className="container">
        <Link to={`/vacations/${vacation._id}`}>
          <h1>{vacation.name}</h1>
        </Link>
        <h2>{vacation.location}</h2>
        <h2>{vacation.activities}</h2>
        <p>{vacation.pricing}</p>
      </div>
    </div>
  );
}

// <div className="card" style={{ backgroundImage: `url(${vacation.image})` }}>
//   <div className="container">
//     <Link to={`/vacations/${vacation._id}`}>
//       <h1>{vacation.name}</h1>
//       <h2>{vacation.location}</h2>
//       <h2>{vacation.activities}</h2>
//       <p>{vacation.pricing}</p>
//     </Link>
//   </div>
// </div>
