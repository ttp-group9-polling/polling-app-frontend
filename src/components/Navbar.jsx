// Navbar.jsx - Displays links to the main pages.
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Polling App
      </Link>

      <div className="nav-links">
        <Link to="/">All Polls</Link>
        <Link to="/create">Create Poll</Link>
      </div>
    </nav>
  );
}

export default Navbar;