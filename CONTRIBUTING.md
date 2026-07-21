# Contributing to PulseBoard

## Git Workflow

Before starting new work:

```bash
git checkout main
git pull origin main
git checkout -b feature/task-name
```

Use a clear branch name that matches the task.

Examples:

- `feature/poll-list`
- `feature/create-poll`
- `feature/vote-route`
- `feature/results-page`
- `fix/cors-error`
- `deploy/vercel`

Commit small, focused changes:

```bash
git status
git add path/to/changed/files
git commit -m "Add clear description"
git push -u origin feature/task-name
```

Avoid using `git add .` when unrelated frontend or backend files are modified.

Then open a Pull Request into `main`.

## Repository Structure

This project uses two repositories inside the Group 9 GitHub organization:

```text
ttp-group9-polling/
├── polling-app-frontend/
└── polling-app-backend/
```

Repositories:

- Frontend: https://github.com/ttp-group9-polling/polling-app-frontend
- Backend: https://github.com/ttp-group9-polling/polling-app-backend
- Project Board: https://github.com/orgs/ttp-group9-polling/projects/1

## Pull Request Rules

Every Pull Request must:

- Be small and focused
- Link an issue using `Closes #N`
- Explain what changed
- Explain how to test it
- Receive at least one approving review from another teammate
- Pass local testing before merge
- Avoid including unrelated frontend or backend changes
- Avoid committing secrets, `.env`, or `node_modules`

## Pull Request Description Template

```md
## Summary

Briefly explain what this Pull Request adds or changes.

## Included

- Change 1
- Change 2
- Change 3

## How to Test

1. Open the correct project folder.
2. Run `npm install`.
3. Run the application.
4. Test the listed routes or features.
5. Run `npm run build` when applicable.

Closes #N
```

## Review Checklist

The reviewer should confirm:

- The branch runs locally
- The code matches the shared API contract
- No secrets are committed
- No `node_modules` folder is committed
- Error handling is present where needed
- Naming is clear
- The change does not break existing features
- The change contains only files related to the task
- The author included clear testing instructions

## Main Branch Rule

`main` must always work.

Nobody should push directly to `main`. All changes must reach `main` through a reviewed Pull Request.

## Environment Variables

Do not commit `.env` files.

Frontend environment variables belong in:

```text
polling-app-frontend/.env
```

Backend environment variables belong in:

```text
polling-app-backend/.env
```

Only example files such as `.env.example` should be committed.

Never place passwords, database credentials, or private API keys in frontend variables beginning with `VITE_`.

## Before Merging

The author and reviewer should confirm:

```bash
git status
npm run build
```

When applicable, also run:

```bash
npm run lint
```

After approval, merge the Pull Request into `main` and delete the feature branch when it is no longer needed.
