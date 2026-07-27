// PollCard.jsx - Displays one poll.
import { Link } from "react-router-dom";

function PollCard({ poll }) {
  return (
    <article className="card poll-card">
      <h2 className="poll-card-title">{poll.title}</h2>

      <p className="poll-card-desc">{poll.description}</p>

      <p className="poll-card-meta">
        {poll.options.length} options
      </p>

      <div className="poll-card-actions">
        <Link to={`/polls/${poll.id}`} className="btn">
          Vote
        </Link>

        <Link
          to={`/polls/${poll.id}/results`}
          className="btn btn-secondary"
        >
          Results
        </Link>
      </div>
    </article>
  );
}

export default PollCard;