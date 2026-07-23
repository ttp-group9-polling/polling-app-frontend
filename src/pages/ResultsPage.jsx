// ResultsPage.jsx - Shows poll results and vote percentages.
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getPoll } from "../api.js";

function ResultsPage() {
  const { id } = useParams();

  // Stores the poll and request status.
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Loads the poll results.
  useEffect(() => {
    getPoll(id)
      .then(setPoll)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <section>
        <div className="empty-state">Loading results...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className="empty-state error">Could not load results: {error}</div>
        <p>
          <Link to="/">Back to all polls</Link>
        </p>
      </section>
    );
  }

  // Sorts the options from most votes to least votes.
  const ranked = [...poll.options].sort((a, b) => b.voteCount - a.voteCount);
  const maxVotes = ranked.reduce((max, o) => Math.max(max, o.voteCount), 0);

  return (
    <section>
      <h1>{poll.title}</h1>
      <p className="subtitle">
        {poll.totalVotes} {poll.totalVotes === 1 ? "vote" : "votes"} total
      </p>

      <div className="card results">
        {ranked.map((option, index) => {
          const pct = poll.totalVotes
            ? Math.round((option.voteCount / poll.totalVotes) * 100)
            : 0;
          const width = maxVotes ? (option.voteCount / maxVotes) * 100 : 0;
          const isLeader = index === 0 && option.voteCount > 0;

          return (
            <div className="result-row" key={option.id}>
              <div className="result-label">
                <span>
                  {isLeader && <span className="crown">👑 </span>}
                  {option.text}
                </span>
                <span className="result-count">
                  {option.voteCount} ({pct}%)
                </span>
              </div>
              <div className="bar-track">
                <div
                  className={`bar-fill${isLeader ? " bar-leader" : ""}`}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}

        {poll.totalVotes === 0 && (
          <p className="subtitle">No votes yet. Be the first!</p>
        )}
      </div>

      <div className="poll-card-actions">
        <Link className="btn" to={`/polls/${id}`}>
          Vote
        </Link>
        <Link className="btn btn-ghost" to="/">
          All Polls
        </Link>
      </div>
    </section>
  );
}

export default ResultsPage; // Allows other files to use this page
