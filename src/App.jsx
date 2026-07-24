import PollCard from "./components/PollCard.jsx";

// Mock poll data used before connecting to the backend.
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