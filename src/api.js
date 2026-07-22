const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const API = `${BASE_URL}/api`;

async function request(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const body = await res.json().catch(() => null);

  if (!res.ok) {
    const message = body?.error || `Request failed (${res.status})`;
    throw new Error(message);
  }

  return body;
}

export function getPolls() {
  return request("/polls");
}

export function getPoll(id) {
  return request(`/polls/${id}`);
}

export function createPoll({ title, description, options }) {
  return request("/polls", {
    method: "POST",
    body: JSON.stringify({ title, description, options }),
  });
}

export function castVote(pollId, { optionId, voterEmail }) {
  return request(`/polls/${pollId}/vote`, {
    method: "POST",
    body: JSON.stringify({ optionId, voterEmail }),
  });
}
