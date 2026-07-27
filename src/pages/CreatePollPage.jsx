// CreatePollPage.jsx - Creates a new poll.
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePollPage() {
  // Stores the title, description, options, and errors.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Updates, adds, and removes poll options.
  function updateOption(index, value) {
    setOptions((prev) =>
      prev.map((option, i) => (i === index ? value : option))
    );
  }

  function addOption() {
    setOptions((prev) => [...prev, ""]);
  }

  function removeOption(index) {
    setOptions((prev) =>
      prev.filter((option, i) => i !== index)
    );
  }

  // Sends the new poll to the backend.
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const API_URL =
      import.meta.env.VITE_API_URL || "http://localhost:3000";

    try {
      const res = await fetch(`${API_URL}/api/polls`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          options,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to create poll");
      }

      navigate(`/polls/${data.id}`);
    } catch (err) {
      setError(err.message);
    }
  }

  // Displays the create poll form.
  return (
    <div>
      <h1>Create a Poll</h1>

      <p className="subtitle">
        Add a title, a description, and at least 2 options.
      </p>

      <form className="card form" onSubmit={handleSubmit}>
        <label className="field">
          Title
          <input
            type="text"
            value={title}
            placeholder="What should we build next?"
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>

        <label className="field">
          Description
          <textarea
            value={description}
            placeholder="A little context for voters."
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </label>

        <h2>Options</h2>

        {options.map((option, index) => (
          <div className="option-row" key={index}>
            <input
              type="text"
              value={option}
              placeholder={`Option ${index + 1}`}
              onChange={(event) =>
                updateOption(index, event.target.value)
              }
              required
            />

            {options.length > 2 && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => removeOption(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary"
          onClick={addOption}
        >
          + Add option
        </button>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn">
          Create Poll
        </button>
      </form>
    </div>
  );
}

export default CreatePollPage;


