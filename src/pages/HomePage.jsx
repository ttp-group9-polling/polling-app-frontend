// HomePage.jsx - Loads and displays all polls.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPolls } from "../api.js";
import PollCard from "../components/PollCard.jsx";

function HomePage() {
  // Stores the polls and request status.
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Loads the polls when the page opens.
  useEffect(() => {
    getPolls()
      .then(setPolls)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []); // run once

  return (
    <section>
      <h1>All Polls</h1>
      <p className="subtitle">
        Pick a poll to cast your vote, or create your own.
      </p>

      {loading && <div className="empty-state">Loading polls...</div>}

      {error && (
        <div className="empty-state error">Could not load polls: {error}</div>
      )}

      {!loading && !error && polls.length === 0 && (
        <div className="empty-state">
          No polls yet. <Link to="/create">Create the first one</Link>
        </div>
      )}

      {/* Displays one card for each poll. */}
      {!loading && !error && polls.length > 0 && (
        <div className="poll-grid">
          {polls.map(
            (
              poll, // key = the unique id React needs for each list item
            ) => (
              <PollCard key={poll.id} poll={poll} /> // poll = the data we hand to the card (a "prop")
            ),
          )}
        </div>
      )}
    </section>
  );
}

export default HomePage; // Allows other files to use this page
