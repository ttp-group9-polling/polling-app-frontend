
// PollCard.jsx  -  A reusable card for ONE poll. HomePage renders many via .map.

// the Vote / Results links
import { Link } from "react-router-dom";

function PollCard({ poll }) {
  const optionCount = poll.Options?.length ?? 0; // how many options; ?. avoids a crash, ?? 0 gives a fallback


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
        <Link className="btn" to={`/polls/${poll.id}`}> {/* go to this poll's vote page */}
          Vote
        </Link>
        <Link className="btn btn-ghost" to={`/polls/${poll.id}/results`}> {/* go to its results */}
          Results
        </Link>
      </div>
    </article>
  );
}

export default PollCard; // export so HomePage can import it