# Contributing

## Git workflow

Start each task from an up-to-date main:

```bash
git checkout main
git pull
git checkout -b feature/task-name
```

Use a branch name that matches the task, for example `feature/create-poll` or `fix/cors-error`.

Commit small, focused changes and push:

```bash
git add path/to/changed/files
git commit -m "Clear description"
git push -u origin feature/task-name
```

Avoid `git add .` so you do not commit unrelated files. Then open a Pull Request into `main`.

## Repositories

Two repos in the `ttp-group9-polling` organization:

- Frontend: https://github.com/ttp-group9-polling/polling-app-frontend
- Backend: https://github.com/ttp-group9-polling/polling-app-backend

Each repo has its own `.env` (never committed) and its own `.env.example` (committed).

## Pull request rules

Every PR should:

- Be small and focused, with only files related to the task
- Explain what changed and how to test it
- Link its issue with `Closes #N`
- Get at least one approving review from a teammate
- Leave out `.env`, `node_modules`, and secrets (no secrets in `VITE_` variables)

`main` must always work. Nobody pushes directly to `main`.

## Before merging

```bash
git status
npm run build
npm run lint
```

After approval, merge into `main` and delete the feature branch.
