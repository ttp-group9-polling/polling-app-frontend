// Displays the main polling application.
import PollCard from "./components/PollCard.jsx";

// Temporary poll data used before connecting the backend.
const fakePoll = {
  id: 1,
  title: "What should we build next?",
  description: "Choose the project idea you like the most.",
  options: [
    { id: 1, text: "Task manager" },
    { id: 2, text: "Movie app" },
    { id: 3, text: "Recipe app" },
  ],
};

function App() {
  return (
    <main>
      <h1>Polling App</h1>
      <PollCard poll={fakePoll} />
    </main>
  );
}

export default App;

/* Phase 2 */