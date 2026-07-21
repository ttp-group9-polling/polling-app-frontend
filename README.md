# PulseBoard — TTP Summer 2026 Capstone I

PulseBoard is a full-stack PERN polling application built by a three-person team.

Users can:

- View all polls
- Create a poll with two or more options
- Open a poll and vote
- View poll results
- Navigate through the application with React Router
- Keep polls and votes stored in PostgreSQL

## Team

| Name | Primary Role |
|---|---|
| Dhimy Jean | Frontend Lead and Planning Coordinator |
| Rehman Mohammad| Backend Lead |
|  | Database and Integration Lead |

**Assigned TA:** ____________________

## Repositories

This project uses two repositories inside the Group 9 GitHub organization:

- Frontend: https://github.com/ttp-group9-polling/polling-app-frontend
- Backend: https://github.com/ttp-group9-polling/polling-app-backend
- Project Board: https://github.com/orgs/ttp-group9-polling/projects/1

This repository contains the React frontend only.

## Frontend Project Structure

```text
polling-app-frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── api.js
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── CONTRIBUTING.md
├── PROJECT-BOARD.md
├── README.md
├── TEAM-NORMS.md
├── package.json
├── vercel.json
└── vite.config.js