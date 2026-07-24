// // api.js - This file connects the frontend to the backend. Every page imports these functions.

// backend address from .env, or localhost
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const API = `${BASE_URL}/api`; // creates the base API address

// Sends requests to the backend and handles the response.
async function request(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    headers: { "Content-Type": "application/json" }, // tell server, equest body is JSON
    ...options,//adds settings when provided (methods, body)
  });

  const body = await res.json().catch(() => null); // parse JSON, or use null if there is no JSON

  if (!res.ok) {
    const message = body?.error || `Request failed (${res.status})`;
    throw new Error(message); // allows the page to catch and display the error
  }

  return body;
}
// GET /api/polls
export function getPolls() {
  return request("/polls");
}
// Gets one poll by its id.
export function getPoll(id) {
  return request(`/polls/${id}`);
}

// Sends a new poll to the backend.
export function createPoll({ title, description, options }) {
  return request("/polls", {
    method: "POST",
    body: JSON.stringify({ title, description, options }),
  });
}
// Sends a vote for one poll option.
export function castVote(pollId, { optionId, voterEmail }) {
  return request(`/polls/${pollId}/vote`, {
    method: "POST",
    body: JSON.stringify({ optionId, voterEmail }),
  });
}

