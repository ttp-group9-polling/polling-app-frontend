// Displays the information for one poll.
function PollCard({ poll }) {
  return (
    <article className="card poll-card">
      <h2 className="poll-card-title">{poll.title}</h2>
      <p className="poll-card-desc">{poll.description}</p>
      <p className="poll-card-meta">{poll.options.length} options</p>
    </article>
  );
}

export default PollCard;