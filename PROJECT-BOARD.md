# Project Board - Group 9 Polling App

Team: Group 9 | Duration: 1 week | Org: `ttp-group9-polling`

## Goal

A PERN polling app where users view polls, create polls, vote, see results, and keep data after a refresh.

## Repositories

- Frontend: polling-app-frontend
- Backend: polling-app-backend
- Database: Neon PostgreSQL

## Status legend

Not Started / In Progress / In Review / Blocked / Done

## 1. Setup and planning - Done

- [x] Create org and both repos
- [x] Invite team and TA
- [x] Team norms, roles, and deployment owners
- [x] Agree on the API contract and database schema

## 2. Database - Done

- [x] Poll, Option, and Vote models with associations
- [x] Seed data
- [x] dbdiagram.io schema

## 3. Backend - In Review

- [x] GET /polls, POST /polls, GET /polls/:id, POST /polls/:id/vote
- [x] Validation and clear error responses
- [x] Tested in Postman
- [ ] PR reviewed and merged into main

## 4. Frontend - In Progress

- [x] React, Vite, Router, shared layout
- [x] Home, Create Poll, Poll, and Results pages
- [x] API client and loading / empty / error states
- [ ] PR reviewed and merged into main
- [ ] Styling (css)

## 5. Integration and deployment - Not Started

- [ ] Deploy database to Neon
- [ ] Deploy backend to Render
- [ ] Deploy frontend to Vercel
- [ ] Add production environment variables and share the URLs

## 6. Core testing - Not Started

- [ ] Full flow works: view, create, vote, results ordered by count
- [ ] Navigation has no full-page reloads
- [ ] Data persists after a backend restart
- [ ] Update README and add schema / wireframe links

## Stretch goals (after core)

- [x] Prevent duplicate voting (one vote per email)
- [ ] Shareable poll link
- [ ] Poll closing date
- [ ] Active vs closed polls
- [ ] Delete or duplicate a poll
- [ ] Mobile improvements
