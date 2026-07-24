// Displays the information for one poll.
function PollCard({ poll }) {
  return (
    <article className="card">
      <h2>{poll.title}</h2>
      <p>{poll.description}</p>
      <p>{poll.options.length} options</p>
    </article>
  );
}

export default PollCard;

/* Phase 2 */