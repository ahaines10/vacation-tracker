import { Link } from "react-router-dom";
export default function VacationIndexPage({ vacation }) {
  return (
    <div>
      <Link to={`/vacations/${vacation._id}`}>
        <img src={vacation.image}></img>
        <h1>{vacation.name}</h1>
        <h2>{vacation.location}</h2>
        <h2>{vacation.activities}</h2>
        <p>{vacation.pricing}</p>
      </Link>
    </div>
  );
}
