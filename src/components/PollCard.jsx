import { Link } from "react-router-dom";

function PollCard({ poll }) {
  const optionCount = poll.options?.length ?? poll.Options?.length ?? 0;

  return (
    <article className="card poll-card">
      <div className="poll-card-body">
        <h2 className="poll-card-title">{poll.title}</h2>
        <p className="poll-card-desc">{poll.description}</p>
        <p className="poll-card-meta">
          {optionCount} {optionCount === 1 ? "option" : "options"}
        </p>
      </div>

      <div className="poll-card-actions">
        <Link className="btn" to={`/polls/${poll.id}`}>
          Vote
        </Link>
        <Link className="btn btn-ghost" to={`/polls/${poll.id}/results`}>
          Results
        </Link>
      </div>
    </article>
  );
}

export default PollCard;
