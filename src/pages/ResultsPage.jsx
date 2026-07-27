// ResultsPage.jsx - Loads and displays poll results.
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ResultsPage() {
  const { id } = useParams();

  const [poll, setPoll] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    async function loadPoll() {
      try {
        const res = await fetch(`${API_URL}/api/polls/${id}`);

        if (!res.ok) {
          throw new Error("Failed to load results");
        }

        const data = await res.json();
        setPoll(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadPoll();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!poll) {
    return <p>Loading...</p>;
  }

  const sortedOptions = [...poll.options].sort(
    (a, b) => b.voteCount - a.voteCount,
  );

  function getPercentage(voteCount) {
    if (poll.totalVotes === 0) {
      return 0;
    }

    return Math.round((voteCount / poll.totalVotes) * 100);
  }

  return (
    <div>
      <h1>{poll.title} Results</h1>

      <p className="subtitle">
        {poll.totalVotes} {poll.totalVotes === 1 ? "vote" : "votes"} total
      </p>

      <div className="card results">
        {sortedOptions.map((option) => (
          <div className="result-row" key={option.id}>
            <span>{option.text}</span>

            <strong>
              {option.voteCount} {option.voteCount === 1 ? "vote" : "votes"} ( 
              {getPercentage(option.voteCount)}%)
            </strong>
          </div>
        ))}
      </div>

      <Link to="/" className="btn btn-secondary">
        Back to All Polls
      </Link>
    </div>
  );
}

export default ResultsPage;
