
/* Phase 1 */
// Phase 2 — Display 1 Fake Polls
import PollCard from "./components/PollCard.jsx";

// Temporary poll data used before connecting the backend.
const fakePolls = [
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
  /* Phase 2 */
// Phase 2 — Display Multiple Fake Polls
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
    title: "Movie",
    description: "What's your favorite movie?",
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
        {fakePolls.map((poll) => ( //.map() visits each poll
          <PollCard key={poll.id} poll={poll} /> //helps React uniquely identify every card.
        ))}
      </div>
    </main>
  );
}

export default App;