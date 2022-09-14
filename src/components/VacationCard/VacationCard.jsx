import { Link } from "react-router-dom";
import "./VacationCard.css";
export default function VacationIndexPage({ vacation }) {
  return (
    <div
      className="vacationCard"
      style={{ backgroundImage: `url(${vacation.image})` }}
    >
      <Link to={`/vacations/${vacation._id}`}>
        <h1>{vacation.name.Capitalize}</h1>
        <h2>{vacation.location}</h2>
        <h2>{vacation.activities}</h2>
        <p>{vacation.pricing}</p>
      </Link>
    </div>
  );
}
