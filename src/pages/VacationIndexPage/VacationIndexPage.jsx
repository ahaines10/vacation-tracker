import VacationCard from "../../components/VacationCard/VacationCard";
import "./VacationIndexPage.css";
export default function VacationIndexPage({ vacations }) {
  console.log(vacations);
  return (
    <div>
      <h1>My Vacations</h1>
      <ul className="myvacation">
        {vacations.map((vacation) => (
          <VacationCard vacation={vacation} key={vacation._id} />
        ))}
      </ul>
      ;
    </div>
  );
}
