export default function VacationIndexPage({ vacations }) {
  console.log(vacations);
  return (
    <>
      <img src={vacations.image}></img>
      <h1>{vacations.name}</h1>
      <h2>{vacations.location}</h2>
      <h2>{vacations.activities}</h2>
      <p>{vacations.pricing}</p>
    </>
  );
}
