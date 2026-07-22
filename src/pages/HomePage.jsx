import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPolls } from "../api.js";
import PollCard from "../components/PollCard.jsx";

function HomePage() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPolls()
      .then(setPolls)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h1>All Polls</h1>
      <p className="subtitle">Pick a poll to cast your vote, or create your own.</p>

      {loading && <div className="empty-state">Loading polls...</div>}

      {error && (
        <div className="empty-state error">Could not load polls: {error}</div>
      )}

      {!loading && !error && polls.length === 0 && (
        <div className="empty-state">
          No polls yet. <Link to="/create">Create the first one</Link>
        </div>
      )}

      {!loading && !error && polls.length > 0 && (
        <div className="poll-grid">
          {polls.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
