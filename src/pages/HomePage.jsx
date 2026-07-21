function HomePage() {
  return (
    <section>
      <h1>All Polls</h1>

      <p className="subtitle">
        View an available poll and cast your vote.
      </p>

      <div className="empty-state">
        No polls are available yet.
      </div>
    </section>
  );
}

export default HomePage;