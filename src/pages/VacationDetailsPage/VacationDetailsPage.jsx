import CommentsForm from "../../components/CommentsForm/CommentsForm";
import { useParams } from "react-router-dom";
import Comments from "../../components/Comments/Comments";
export default function VacationDetailsPage({
  vacations,
  addComment,
  deleteComment,
  updateComment,
}) {
  const { hank } = useParams();
  const vacation = vacations.find((v) => v._id === hank);
  let comments = vacation.comments.map((comment) => (
    <Comments
      key={comment._id}
      comment={comment}
      vid={vacation._id}
      deleteComment={deleteComment}
      updateComment={updateComment}
    />
  ));
  console.log(vacation);
  return (
    <div>
      <img src={vacation.image}></img>
      <h1>{vacation.name}</h1>
      <h2>{vacation.location}</h2>
      <h2>{vacation.activities}</h2>
      <p>{vacation.pricing}</p>
      {comments}
      <CommentsForm addComment={addComment} vacation={vacation} />
    </div>
  );
}
