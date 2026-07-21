# Team Norms: Capstone I

**Group 9 — TTP Summer 2026**

We have discussed how we want to work together. We agree that these expectations are important to us, but that our opinions may change with experience. This is a living document and may be updated as we learn more about working together as a team.

## Team Members

|     Name        |       GitHub      |     Discord     | Weekly Hours |          Best Availability      |
|-----------------|-------------------|-----------------|--------------|---------------------------------|
| Dhimy Jean           | @dhimysoft   | @Dhimy Jean     | 30–35 hours  | Monday–Friday, 10:00 AM–5:00 PM |
| Rehman Mohammad | @rehmanmohammad938| @Rehman Mohammad| 30–35 hours  | Monday–Friday, 10:00 AM–5:00 PM |
| Shan Htet San   | @shanhtetsan      | @shanhtetsan29  | 30–35 hours  | Monday–Friday, 10:00 AM–5:00 PM |

**Assigned TA:** Shirley

Each member commits to approximately 30–35 hours per week on this capstone during the TTP work schedule.

## Communication and Meetings

Our primary communication channel is **Discord**. Team decisions are posted in the shared channel, not only in direct messages, so that nobody misses important information.

We respond to each other within **2 working hours** on weekdays during our working hours. If someone will be unavailable, they will notify the team in the Discord channel ahead of time.

We hold a daily standup at **1:00 PM**, or at the time assigned by our TA. The standup is run by our TA and timeboxed to approximately 10 minutes. Each team member answers:

1. What did I complete yesterday?
2. What do I intend to complete today?
3. What is blocking me?

We keep blockers specific and actionable. Instead of saying, “The backend is broken,” we say, “`POST /api/polls` returns a 500 error, and the server log says the `pollId` column does not exist.”

If a team member has been blocked for more than **30 minutes**, they post the problem in the team channel.

We keep our TA informed about progress, blockers, and important decisions. The TA is our project manager and coach, not a teammate who writes our code.

## Repository Structure

We use two repositories inside the shared Group 9 GitHub organization:

```text
ttp-group9-polling/
├── polling-app-frontend/
└── polling-app-backend/
```

Repositories:

- Frontend: https://github.com/ttp-group9-polling/polling-app-frontend
- Backend: https://github.com/ttp-group9-polling/polling-app-backend
- Project Board: https://github.com/orgs/ttp-group9-polling/projects/1

Frontend work belongs in the frontend repository.
Backend and database work belong in the backend repository.

We use one shared PostgreSQL database hosted on Neon.

## Code Quality and Standards

The `main` branch must always work. Nobody commits directly to `main`, and nobody merges code that they have not run and tested.

Every piece of work happens on a branch named after the task or feature. Each branch must begin from an up-to-date version of `main`.

Every change reaches `main` through a Pull Request with at least one approving review from another teammate.

Every Pull Request must:

- Explain what the change does
- Explain how to test it
- Link the related issue using `Closes #N`
- Contain only files related to the task
- Avoid committing `.env`, `node_modules`, passwords, API keys, or database credentials

Sensitive information must never be placed in frontend `VITE_` environment variables.

We agree on shared contracts before building connected features, including:

- Database table structures
- Model associations
- API routes
- Request bodies
- Response formats
- Error formats
- Frontend route paths

## Work Division

We divide the initial work primarily by **horizontal layers with required cross-stack participation**. Each person has a primary ownership area, but the team collaborates across layers and reviews one another’s work.

### Dhimy Jean — Frontend Lead and Planning Coordinator

Dhimy is primarily responsible for the user-facing React application and for helping the team organize the project.

Responsibilities include:

- Setting up and maintaining the React and Vite frontend
- Configuring React Router and frontend routes
- Creating shared layout, navigation, pages, and reusable components
- Building the poll list, create-poll form, voting interface, and results interface
- Connecting frontend components to the backend API
- Handling loading, empty, success, and error states in the interface
- Maintaining basic responsive styling and accessibility
- Preparing frontend environment-variable examples
- Supporting the Vercel deployment
- Helping organize GitHub Issues, branches, Pull Requests, and task priorities
- Confirming that frontend work follows the shared API contract
- Reviewing or pairing on at least one backend or integration task

### Team Member 2 — Backend Lead

The Backend Lead is primarily responsible for the Express server and the application’s API behavior.

Responsibilities include:

- Setting up and maintaining the Node.js and Express backend
- Organizing routes, controllers, middleware, and server configuration
- Implementing the required API routes:
  - `GET /api/polls`
  - `POST /api/polls`
  - `GET /api/polls/:id`
  - `POST /api/polls/:id/vote`
- Validating request data and returning clear error responses
- Handling CORS and backend environment variables
- Connecting backend routes to Sequelize models and the database
- Testing routes with Postman or another API client
- Supporting the Render deployment
- Documenting request bodies, response formats, and error formats
- Reviewing or pairing on at least one frontend or database task

### Team Member 3 — Database and Integration Lead

The Database and Integration Lead is primarily responsible for the PostgreSQL database, Sequelize models, and the connection between the frontend and backend.

Responsibilities include:

- Designing the database schema for polls, options, and votes
- Defining Sequelize models and associations
- Creating or maintaining seed data
- Confirming that database constraints protect data integrity
- Helping configure local PostgreSQL and the shared Neon database
- Verifying that backend responses match the frontend’s expected data shape
- Testing the complete flow from frontend request to backend route to database response
- Helping debug integration problems across the stack
- Supporting deployment environment-variable configuration
- Documenting the schema and important integration decisions
- Reviewing or pairing on at least one frontend or backend task

### Shared Responsibilities

All three team members are responsible for:

- Attending standups and communicating blockers
- Creating and updating GitHub Issues
- Working on task-specific branches
- Writing clear commit messages
- Opening focused Pull Requests
- Testing their own work before requesting review
- Reviewing another teammate’s Pull Request
- Keeping `.env`, credentials, and `node_modules` out of Git
- Pulling changes from `main` regularly
- Helping test the complete application
- Contributing to project documentation and the final presentation

Before the project ends, every member must contribute to or review work outside their primary layer. Nobody should spend the entire project working only on one part of the application.

## Definition of Done

A task is complete when:

- It runs locally
- It matches the shared contract
- It has been tested
- A teammate reviewed it
- It is merged into `main`
- The merged application still works
- The related GitHub issue is closed
- The deployed application still works, when applicable

## Collaboration and Support

Nobody stays stuck alone. If a teammate cannot run the project locally, resolving that problem becomes a team priority.

We ask for help in this order:

1. Try to identify and solve the problem independently
2. Check the exact error message and relevant documentation
3. Ask a teammate
4. Ask the TA

When asking for help, we explain what we are trying to do, what we already tried, the exact error message, and the result we expected.

Research and debugging count as project work.

We pair with a teammate or TA on unfamiliar or high-risk tasks, including merge conflicts, deployment, authentication, database migrations, and frontend/backend integration.

## Time Management

We complete the initial team setup once and together. This includes shared repository access, frontend and backend setup, environment-variable templates, database setup, and deployment accounts.

We deploy early:

- Frontend → Vercel
- Backend → Render
- Database → Neon

Deployment owners:

- Frontend / Vercel:Dhimy Jean
- Backend / Render: Rehman Mohammad
- Database / Neon:  Shan Htet San

Our core overlap hours are Monday–Friday, 10:00 AM–5:00 PM.

We push our branches at the end of every working session, complete core requirements before stretch goals, and pull changes from `main` regularly.

## Conflict Resolution

We assume good intent. Disagreements are about the code or process, not the person.

Technical disagreements are timeboxed to **15 minutes**. If the team is still divided, we choose the option that meets the requirements, is easier to test, is easier to reverse, and keeps the team moving.

If the disagreement remains unresolved, we ask the TA and accept the decision.

If a Pull Request review stalls for more than **4 working hours**, the author contacts the assigned reviewer. Another available teammate may review it afterward.

If someone becomes unresponsive, we contact them privately and respectfully before notifying the TA.

We do not silently take over another person’s assigned work.

A blocker lasting more than one working day is escalated to the TA.

## Agreed By

| Name              |    Date |
|-------------------|---------|
| Dhimy Jean | ______________ |
| Rehman Mohammad | _________ |
| Shan Htet San| ____________ |
