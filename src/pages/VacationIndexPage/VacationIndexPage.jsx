import VacationCard from "../../components/VacationCard/VacationCard";
export default function VacationDetailsPage({ vacations }) {
  console.log(vacations);
  return (
    <div>
      <h1>My Vacations</h1>
      <ul>
        {vacations.map((vacations) => (
          <VacationCard vacations={vacations} />
        ))}
      </ul>
      ;
    </div>
  );
}
