// Layout.jsx - Shows the navbar, page content, and footer.
import { Link, Outlet } from "react-router-dom"; // Link changes pages; Outlet shows the current page

function Layout() {
  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="brand">
          Polling App
        </Link>

        <nav className="nav-links">
          <Link to="/">All Polls</Link>
          <Link to="/create">Create Poll</Link>
        </nav>
      </header>

      <main className="page">
        <Outlet />
      </main>

      <footer className="footer">
        TTP Summer 2026 · Capstone I · Group 9
      </footer>
    </div>
  );
}

export default Layout; // Allows main.jsx to import and use Layout