# Team Norms - Group 9, TTP Summer 2026

How we agreed to work together. This is a living document and may be updated as we learn.

## Members

| Name | GitHub | Weekly Hours | Availability |
|---|---|---|---|
| Dhimy Jean | @dhimysoft | 30-35 | Mon-Fri, 10:00 AM-5:00 PM |
| Rehman Mohammad | @rehmanmohammad938 | 30-35 | Mon-Fri, 10:00 AM-5:00 PM |
| Shan Htet San | @shanhtetsan | 30-35 | Mon-Fri, 10:00 AM-5:00 PM |

TA: Shirley

## Communication

- Primary channel is Discord. Decisions go in the shared channel, not only DMs.
- We reply within 2 working hours on weekdays.
- Daily standup at 1:00 PM (or the TA's time), about 10 minutes: what I finished, what I plan to do, what is blocking me.
- Keep blockers specific ("POST /api/polls returns 500, log says pollId column does not exist").
- If blocked for more than 30 minutes, post it in the channel.

## Repositories

Two repos in the `ttp-group9-polling` organization plus one shared Neon database:

- Frontend: polling-app-frontend
- Backend: polling-app-backend
- Database: Neon PostgreSQL

## Code standards

- `main` must always work. Nobody commits directly to `main`.
- Every task happens on its own branch, started from an up-to-date `main`.
- Every change reaches `main` through a PR with at least one approving review.
- Every PR explains what changed and how to test it, links its issue with `Closes #N`, and contains only related files.
- Never commit `.env`, `node_modules`, or secrets. No secrets in `VITE_` variables.
- We agree on shared contracts (tables, associations, routes, request and response shapes, error format, frontend routes) before building connected features.

## Roles

- Dhimy Jean - Frontend Lead: React app, routing, pages, components, API integration, Vercel deploy.
- Rehman Mohammad - Backend Lead: Express server, the four API routes, validation, CORS, Render deploy.
- Shan Htet San - Database and Integration Lead: schema, Sequelize models and associations, seed data, Neon, integration testing.

Everyone attends standups, writes clear commits, opens focused PRs, reviews a teammate's PR, and helps test the whole app. Before the project ends, everyone contributes outside their main layer.

## Deployment owners

- Frontend / Vercel: Dhimy Jean
- Backend / Render: Rehman Mohammad
- Database / Neon: Shan Htet San

## Definition of done

A task is done when it runs locally, matches the contract, is tested, is reviewed by a teammate, is merged into `main`, the app still works, and the issue is closed. When deployed, the deployed app works too.

## Working together

- Nobody stays stuck alone. Try it yourself, check the error and docs, ask a teammate, then ask the TA.
- We assume good intent. Technical disagreements are timeboxed to 15 minutes; if still split, pick the option that meets the requirements and is easiest to test and reverse. If unresolved, ask the TA.
- Push branches at the end of every working session. Finish core requirements before stretch goals. Pull `main` regularly.

## Agreed by

| Name | Date |
|---|---|
| Dhimy Jean | __________ |
| Rehman Mohammad | __________ |
| Shan Htet San | __________ |
