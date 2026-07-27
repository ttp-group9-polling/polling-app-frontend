// PollPage.jsx - Loads one poll and submits a vote.
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

function PollPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [poll, setPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [voterEmail, setVoterEmail] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const API_URL =
      import.meta.env.VITE_API_URL || "http://localhost:3000";

    async function loadPoll() {
      try {
        const res = await fetch(`${API_URL}/api/polls/${id}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to load poll");
        }

        setPoll(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadPoll();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const API_URL =
      import.meta.env.VITE_API_URL || "http://localhost:3000";

    try {
      const res = await fetch(`${API_URL}/api/polls/${id}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          optionId: Number(selectedOption),
          voterEmail: voterEmail.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit vote");
      }

      navigate(`/polls/${id}/results`);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (error && !poll) {
    return <p>Error: {error}</p>;
  }

  if (!poll) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{poll.title}</h1>
      <p>{poll.description}</p>

      <form className="vote-form" onSubmit={handleSubmit}>
        <div className="vote-options">
          {poll.options.map((option) => (
            <label className="vote-option" key={option.id}>
              <input
                type="radio"
                name="option"
                value={option.id}
                checked={selectedOption === String(option.id)}
                onChange={(event) =>
                  setSelectedOption(event.target.value)
                }
                required
              />

              {option.text}
            </label>
          ))}
        </div>

        <div className="field">
          <label htmlFor="voterEmail">Email</label>

          <input
            id="voterEmail"
            type="email"
            value={voterEmail}
            onChange={(event) =>
              setVoterEmail(event.target.value)
            }
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="poll-card-actions">
          <button
            className="btn"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Vote"}
          </button>

          <Link
            to={`/polls/${id}/results`}
            className="btn btn-secondary"
          >
            See Results
          </Link>
        </div>
      </form>
    </div>
  );
}

export default PollPage;