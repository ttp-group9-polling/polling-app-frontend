# Polling App - Frontend

React frontend for the Group 9 TTP Summer 2026 Capstone I polling app.

## Features

- View all polls
- Create a poll with two or more options
- Vote using an email address
- Prevent the same email from voting twice
- View poll results
- Navigate with React Router

## Project Links

- Frontend Repository: https://github.com/ttp-group9-polling/polling-app-frontend
- Backend Repository: https://github.com/ttp-group9-polling/polling-app-backend
- GitHub Organization: https://github.com/ttp-group9-polling

### Local Links

These links work only while both servers are running:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

### Live Links

- Frontend: Add Vercel URL after deployment
- Backend: Add Render URL after deployment

## Team

| Name | Role |
|---|---|
| Dhimy Jean | Frontend Lead |
| Rehman Mohammad | Backend Lead |
| Shan Htet San | Database and Integration Lead |

**TA:** Shirley Cheung

## Technologies

- React
- Vite
- React Router
- JavaScript
- CSS
- Fetch API

## Run Locally

### Backend

```bash
cd ~/Documents/ttp-group9-polling/polling-app-backend
npm install
npm run dev
```

### Frontend

Open another terminal:

```bash
cd ~/Documents/ttp-group9-polling/polling-app-frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

The backend runs on:

```text
http://localhost:3000
```

## Environment Variable

Create a `.env` file in the frontend:

```env
VITE_API_URL=http://localhost:3000
```

Do not commit the `.env` file.

## Project Structure

```text
src/
  components/
    Navbar.jsx
    PollCard.jsx

  pages/
    Home.jsx
    CreatePollPage.jsx
    PollPage.jsx
    ResultsPage.jsx

  App.jsx
  index.css
  main.jsx
```

## Testing

```bash
npm run lint
npm run build
```

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: Neon PostgreSQL