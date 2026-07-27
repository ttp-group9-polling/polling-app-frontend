// Home.jsx - Loads and displays all polls.
import { useEffect, useState } from "react";
import PollCard from "../components/PollCard.jsx";

function Home() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL =
      import.meta.env.VITE_API_URL || "http://localhost:3000";

    const url = `${API_URL}/api/polls`;

    async function loadPolls() {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to load polls");
        }

        const data = await res.json();
        setPolls(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPolls();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>All Polls</h1>

      <div className="poll-grid">
        {polls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
}

export default Home;