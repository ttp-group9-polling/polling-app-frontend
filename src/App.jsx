/*
Phase 2 — Display multiple mock polls

This version displayed local mock data before connecting
the frontend to the backend API.

import PollCard from "./components/PollCard.jsx";

const mockPolls = [
  {
    id: 1,
    title: "What is the best food?",
    description: "A quick poll to see what food consumers like.",
    options: [
      { id: 1, text: "Pizza" },
      { id: 2, text: "Pasta" },
      { id: 3, text: "Rice" },
    ],
  },
  {
    id: 2,
    title: "Favorite programming language?",
    description: "Vote for the language you reach for first.",
    options: [
      { id: 4, text: "JavaScript" },
      { id: 5, text: "Python" },
      { id: 6, text: "Java" },
    ],
  },
  {
    id: 3,
    title: "Favorite movie?",
    description: "Choose the movie you like the most.",
    options: [
      { id: 7, text: "Movie One" },
      { id: 8, text: "Movie Two" },
      { id: 9, text: "Movie Three" },
    ],
  },
];

function App() {
  return (
    <main className="page">
      <h1>All Polls</h1>

      <div className="poll-grid">
        {mockPolls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </main>
  );
}

export default App;
*/

// Phase 3 — Loads polls from the backend API.
import { useState, useEffect } from "react";
import PollCard from "./components/PollCard.jsx";

function App() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://localhost:3000/api/polls";

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
    return <p style={{ padding: 16 }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ padding: 16 }}>Error: {error}</p>;
  }

  return (
    <main className="page">
      <h1>All Polls</h1>

      <div className="poll-grid">
        {polls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </main>
  );
}

export default App;