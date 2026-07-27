// App.jsx - Sets up navigation and routes.
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CreatePollPage from "./pages/CreatePollPage.jsx";
import PollPage from "./pages/PollPage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePollPage />} />
          <Route path="/polls/:id" element={<PollPage />} />
          <Route
            path="/polls/:id/results"
            element={<ResultsPage />}
          />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 Polling App — Group 9</p>
      </footer>
    </div>
  );
}

export default App;