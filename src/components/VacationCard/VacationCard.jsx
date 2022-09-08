export default function VacationIndexPage({ vacations }) {
  console.log(vacations);
  return (
    <>
      <h1>{vacations.name}</h1>
    </>
  );
}
