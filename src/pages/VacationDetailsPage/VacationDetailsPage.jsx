import CommentsForm from "../../components/CommentsForm/CommentsForm";
import { useParams } from "react-router-dom";
export default function VacationDetailsPage({ vacations, addComment }) {
  const { hank } = useParams();
  const vacation = vacations.find((v) => v._id === hank);
  console.log(vacations);
  return (
    <div>
      <img src={vacation.image}></img>
      <h1>{vacation.name}</h1>
      <h2>{vacation.location}</h2>
      <h2>{vacation.activities}</h2>
      <p>{vacation.pricing}</p>
      {vacation.comments.map((reviews) => (
        <div>{reviews.content}</div>
      ))}
      <CommentsForm addComment={addComment} vacation={vacation} />
    </div>
  );
}
