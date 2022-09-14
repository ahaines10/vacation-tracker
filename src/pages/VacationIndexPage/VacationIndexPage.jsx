import VacationCard from "../../components/VacationCard/VacationCard";
export default function VacationIndexPage({ vacations }) {
  console.log(vacations);
  return (
    <div>
      <h1>My Vacations</h1>
      <ul>
        {vacations.map((vacation) => (
          <VacationCard vacation={vacation} key={vacation._id} />
        ))}
      </ul>
      ;
    </div>
  );
}
