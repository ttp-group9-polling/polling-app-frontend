# Polling App - Frontend

React frontend for the Group 9 TTP Summer 2026 Capstone I polling app.

Users can:

- View all polls
- Create a poll with 2 or more options
- Open a poll and vote
- See results ordered by vote count
- Move between pages with React Router

Polls and votes are stored in PostgreSQL through the Express backend, so they survive a refresh.

## Team

| Name | Role |
|---|---|
| Dhimy Jean | Frontend Lead |
| Rehman Mohammad | Backend Lead |
| Shan Htet San | Database and Integration Lead |

TA: Shirley Cheung

## Repositories

Two repos in the `ttp-group9-polling` organization:

- Frontend: https://github.com/ttp-group9-polling/polling-app-frontend
- Backend: https://github.com/ttp-group9-polling/polling-app-backend
- Database: Neon PostgreSQL (no repo)

This repo is the React frontend.

## Getting Started

```bash
npm install
cp .env.example .env   # set VITE_API_URL to the backend URL
npm run dev
```

The app runs on http://localhost:5173 and expects the backend on http://localhost:3000. or to see the Options, Polls, or Votes db use: http://localhost:3000/api/votes 

## Structure

```text
src/
  components/   shared UI (Layout, PollCard)
  pages/        Home, CreatePoll, Poll, Results, NotFound
  api.js        fetch helpers for the backend
  index.css     styles
  main.jsx      routes
```
