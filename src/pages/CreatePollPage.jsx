
// CreatePollPage.jsx - Creates and submits a new poll.
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createPoll } from "../api.js";

function CreatePollPage() {
  const navigate = useNavigate();

    // Stores the form values and page status.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

    // Updates, adds, or removes poll options.
  function updateOption(index, value) {
    setOptions((prev) => prev.map((opt, i) => (i === index ? value : opt)));
  }

  function addOption() {
    setOptions((prev) => [...prev, ""]);
  }

  function removeOption(index) {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  }

   // Validates and sends the new poll to the backend.
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const cleanOptions = options.map((o) => o.trim()).filter(Boolean);

    if (!title.trim() || !description.trim()) {
      setError("Please add a title and description.");
      return;
    }
    if (cleanOptions.length < 2) {
      setError("Please add at least 2 non-empty options.");
      return;
    }

    setSubmitting(true);
    try {
      const poll = await createPoll({
        title: title.trim(),
        description: description.trim(),
        options: cleanOptions,
      });
      navigate(`/polls/${poll.id}`);
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  }

  return (
    <section>
      <h1>Create a Poll</h1>
      <p className="subtitle">Add a title, a description, and at least 2 options.</p>

      <form className="card form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What should we build next?"
            maxLength={255}
          />
        </label>

        <label className="field">
          <span>Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A little context for voters."
            rows={3}
          />
        </label>

        {/* Displays one input for each poll option. */}
        <div className="field">
          <span>Options</span>
          {options.map((option, index) => (
            <div className="option-row" key={index}>
              <input
                type="text"
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
              {options.length > 2 && (
                <button
                  type="button"
                  className="btn btn-ghost btn-icon"
                  onClick={() => removeOption(index)}
                  aria-label={`Remove option ${index + 1}`}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button type="button" className="btn btn-ghost" onClick={addOption}>
            + Add option
          </button>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? "Creating..." : "Create Poll"}
        </button>
      </form>
    </section>
  );
}

export default CreatePollPage; // Allows other files to import and use this page
