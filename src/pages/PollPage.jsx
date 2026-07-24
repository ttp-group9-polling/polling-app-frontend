// PollPage.jsx - Shows one poll and lets the user vote.
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getPoll, castVote } from "../api.js";

function PollPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Stores the poll and loading status.
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  // Stores the vote form values and status.
  const [selectedOption, setSelectedOption] = useState(null);
  const [email, setEmail] = useState("");
  const [voteError, setVoteError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // load this poll when the page appears
  useEffect(() => {
    getPoll(id)
      .then(setPoll) //store
      .catch((err) => setLoadError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  // Validates and submits the vote.
  async function handleVote(event) {
    event.preventDefault(); // stop defauld brower from reload
    setVoteError(""); //clear any old error

    if (!selectedOption) {
      // must pick an option
      setVoteError("Please choose an option.");
      return;
    }
    if (!email.trim()) {
      // must enter an email
      setVoteError(
        "Please enter your email so we can count one vote per person.",
      );
      return;
    }

    setSubmitting(true); // disable the button while sending
    try {
      await castVote(id, {
        optionId: selectedOption,
        voterEmail: email.trim(), ///send vote
      });
      navigate(`/polls/${id}/results`); // success: go to the results page
    } catch (err) {
      setVoteError(err.message);
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <section>
        <div className="empty-state">Loading poll...</div>
      </section>
    );
  }

  if (loadError) {
    return (
      <section>
        <div className="empty-state error">
          Could not load this poll: {loadError}
        </div>
        <p>
          <Link to="/">Back to all polls</Link>
        </p>
      </section>
    );
  }

  return (
    // loaded: show the poll and the vote form
    <section>
      <h1>{poll.title}</h1>
      <p className="subtitle">{poll.description}</p>

      <form className="card form" onSubmit={handleVote}>
        {" "}
        {/* Displays one choice for each poll option. */}
        <div className="field">
          <span>Choose one</span>
          {poll.options.map((option) => (
            <label className="choice" key={option.id}>
              <input
                type="radio"
                name="option"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => setSelectedOption(option.id)}
              />
              <span>{option.text}</span>
            </label>
          ))}
        </div>
        <label className="field">
          <span>Your email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        {voteError && <p className="form-error">{voteError}</p>}
        <div className="poll-card-actions">
          <button type="submit" className="btn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Vote"}
          </button>
          <Link className="btn btn-ghost" to={`/polls/${id}/results`}>
            See Results
          </Link>
        </div>
      </form>

      <p>
        <Link to="/">Back to all polls</Link>
      </p>
    </section>
  );
}

export default PollPage; // Allows other files to use this page
