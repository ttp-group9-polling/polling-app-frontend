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
| ____________________ | Backend Lead |
| ____________________ | Database and Integration Lead |

**Assigned TA:** ____________________

## Repository

This project uses one shared full-stack repository:

- Repository: https://github.com/rehmanmohammad938/Capstone-1-Polling-App
- Frontend folder: `pollapp-front`
- Backend folder: `pollapp-back`

## Project Structure

```text
Capstone-1-Polling-App/
├── pollapp-front/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── vercel.json
├── pollapp-back/
│   ├── app.js
│   ├── db.js
│   ├── package.json
│   └── routes/
├── CONTRIBUTING.md
├── TEAM-NORMS.md
└── README.md
```

## Deployment

- Frontend — Vercel: ____________________
- Backend — Render: ____________________
- Database — Neon: ____________________

## Core Technology

| Layer | Technology |
|---|---|
| Frontend | React, Vite, React Router |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| ORM | Sequelize |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |
| Database Hosting | Neon |
| Version Control | Git and GitHub |

## Required Backend Routes

- `GET /api/polls`
- `POST /api/polls`
- `GET /api/polls/:id`
- `POST /api/polls/:id/vote`

## Required Frontend Routes

- `/`
- `/create`
- `/polls/:id`
- `/polls/:id/results`

## Frontend Status

The frontend foundation currently includes:

- React and Vite setup
- React Router configuration
- Shared layout and navigation
- Home page
- Create Poll page placeholder
- Poll page placeholder
- Results page placeholder
- Not Found page
- Basic responsive styling
- `.env.example`
- Vercel SPA rewrite
- Successful production build

## Local Setup

### Clone the repository

```bash
git clone https://github.com/rehmanmohammad938/Capstone-1-Polling-App.git
cd Capstone-1-Polling-App
```

### Run the frontend

```bash
cd pollapp-front
npm install
npm run dev
```

Vite normally starts at:

```text
http://localhost:5173
```

If that port is already in use, Vite may use another port such as `5174`.

### Build the frontend

```bash
npm run build
```

### Run the backend

```bash
cd ../pollapp-back
npm install
node app.js
```

Use the backend command defined by the team in `pollapp-back/package.json` when a start or development script is added.

## Environment Variables

### Frontend

Create:

```text
pollapp-front/.env
```

Example:

```env
VITE_API_URL=http://localhost:3000
```

### Backend

Create:

```text
pollapp-back/.env
```

Backend variables may include:

```env
DATABASE_URL=your_postgresql_connection_string
PORT=3000
```

Never commit `.env` files.

## Git Workflow

1. Pull the latest `main`.
2. Create a task branch.
3. Make small, focused changes.
4. Test locally.
5. Push the branch.
6. Open a Pull Request.
7. Link the issue using `Closes #N`.
8. Request a review from another teammate.
9. Merge only after approval.

Example:

```bash
git checkout main
git pull origin main
git checkout -b feature/task-name
```

## Documentation

- [Team Norms](./TEAM-NORMS.md)
- [Contributing Guide](./CONTRIBUTING.md)

Additional project documents may be added under a `docs/` folder:

- Project Plan
- API Contract
- Database Schema
- Wireframes
- Project Board
- Deployment Plan
- Standup Template

## Definition of Done

A task is complete when:

- It works locally
- It matches the shared contract
- It has been tested
- A teammate reviewed it
- It is merged into `main`
- The merged application still works
- The related issue is closed
- The deployed application works, when applicable

## Current Pull Request Workflow

The frontend foundation is being submitted through a feature branch and Pull Request.

The Pull Request should remain open until another teammate reviews and approves it. After the Pull Request is merged, the linked GitHub issue should close automatically.
