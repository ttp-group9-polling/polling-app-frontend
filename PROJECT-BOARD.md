# Capstone I Polling App — Short Project Board

**Team:** Group 9  
**Duration:** 1 week  
**Organization:** `ttp-group9-polling`

## Goal

Build a PERN polling app where users can view polls, create polls, vote, see results, and keep data after refresh.

## Repositories
- Organization: `ttp-group9-polling`
- Frontend: `polling-app-frontend`
- Backend: `polling-app-backend`
- Database: Neon PostgreSQL

## Status

- `Not Started`
- `In Progress`
- `In Review`
- `Blocked`
- `Completed`

# 1. Team Setup and Planning

**Owner:** Entire Team  
**Status:** In Progress

- [x] Create GitHub organization
- [x] Create frontend and backend repositories
- [x] Invite Rehman and TA
- [ ] Invite third teammate
- [ ] Confirm everyone can access both repositories
- [ ] Complete Team Norms
- [ ] Confirm roles and deployment owners
- [ ] Review and assign board tasks

**Done when:** Everyone has access and understands their responsibilities.

# 2. Requirements and User Flow

**Owner:** Entire Team  
**Status:** Not Started

- [ ] Review the official requirements
- [ ] Confirm the core flow:
  - View all polls
  - Create a poll
  - Open one poll
  - Submit a vote
  - View results
- [ ] Confirm stretch goals begin only after the core is complete

**Done when:** Every teammate can explain the project.

# 3. Database Design

**Owner:** Database and Integration Lead  
**Status:** Not Started

Required tables:

- `Polls`
- `Options`
- `Votes`

Required relationships:

- Poll has many Options
- Option belongs to Poll
- Option has many Votes
- Vote belongs to Option

Tasks:

- [ ] Confirm columns, data types, foreign keys, and constraints
- [ ] Create the dbdiagram.io diagram
- [ ] Review and approve the schema

**Done when:** The schema is approved before Sequelize models are created.

# 4. System Design and API Contract

**Owner:** Entire Team  
**Status:** Not Started

```text
React frontend
      ↓
Express backend
      ↓
Sequelize
      ↓
PostgreSQL / Neon
```

Required routes:

- `GET /polls`
- `POST /polls`
- `GET /polls/:id`
- `POST /polls/:id/vote`

Tasks:

- [ ] Confirm route prefix
- [ ] Confirm request bodies
- [ ] Confirm response shapes
- [ ] Confirm status codes and error format
- [ ] Confirm CORS and environment variables
- [ ] Confirm Vercel, Render, and Neon owners

**Done when:** Frontend and backend can work from the same written contract.

# 5. Figma Wireframes

**Owner:** Dhimy Jean  
**Status:** Not Started

Create:

- [ ] Home page
- [ ] Create Poll page
- [ ] Poll/Voting page
- [ ] Results page

Include navigation, forms, poll options, vote button, results, loading, empty, and error states.

**Done when:** The team approves all four screens.

# 6. Repository Preparation

**Owners:** Frontend Lead and Backend Lead  
**Status:** Not Started

- [ ] Move frontend code into `polling-app-frontend`
- [ ] Move backend code into `polling-app-backend`
- [ ] Exclude `.env`, `node_modules`, and `dist`
- [ ] Add `.env.example`
- [ ] Confirm both projects run locally
- [ ] Open reviewed Pull Requests

**Done when:** Both organization repositories run correctly.

# 7. Backend and Database Implementation

**Owners:** Backend Lead and Database Lead  
**Status:** Not Started

- [ ] Configure PostgreSQL and Sequelize
- [ ] Create Poll, Option, and Vote models
- [ ] Add associations
- [ ] Add seed data
- [ ] Implement all four required routes
- [ ] Test routes in Postman

**Done when:** All API routes work and data persists.

# 8. Frontend Implementation

**Owner:** Dhimy Jean  
**Status:** In Progress

- [x] Set up React and Vite
- [x] Configure React Router
- [x] Create shared layout and starter pages
- [x] Confirm production build
- [ ] Build Home page
- [ ] Build Create Poll page
- [ ] Build Poll/Voting page
- [ ] Build Results page
- [ ] Add loading, empty, and error states
- [ ] Connect pages to the API

**Done when:** Users can complete the full polling flow.

# 9. Integration and Deployment

**Owner:** Entire Team  
**Status:** Not Started

- [ ] Connect React to Express
- [ ] Fix CORS and response-shape issues
- [ ] Deploy database to Neon
- [ ] Deploy backend to Render
- [ ] Deploy frontend to Vercel
- [ ] Add production environment variables
- [ ] Share deployed URLs

**Done when:** All deployed services work together.

# 10. Core Testing and Documentation

**Owner:** Entire Team  
**Status:** Not Started

- [ ] View all polls
- [ ] Create a poll
- [ ] Open a poll
- [ ] Submit a vote
- [ ] View results ordered by vote count
- [ ] Confirm navigation has no full-page reloads
- [ ] Restart backend and confirm data remains
- [ ] Update README
- [ ] Add Figma and database-diagram links
- [ ] Prepare the final demonstration

**Done when:** Every core requirement works locally and after deployment.

# Stretch Goals

Begin only after the core is complete.

- [ ] Shareable poll link
- [ ] Prevent duplicate voting
- [ ] Poll closing date
- [ ] Active and closed polls
- [ ] Delete or duplicate a poll
- [ ] Authentication
- [ ] Mobile improvements

# Today’s Planning Checklist

- [ ] Confirm organization invitations
- [ ] Add the third teammate
- [ ] Complete Team Norms
- [ ] Confirm roles and deployment owners
- [ ] Review requirements
- [ ] Approve database structure
- [ ] Create dbdiagram.io diagram
- [ ] Approve system design
- [ ] Write API contract
- [ ] Create four Figma wireframes
- [ ] Assign tasks
- [ ] Approve implementation order
