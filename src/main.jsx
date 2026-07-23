
//  main.jsx - Starts the React app and connects each URL to a page.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreatePollPage from "./pages/CreatePollPage.jsx";
import PollPage from "./pages/PollPage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import "./index.css";

// Displays the app inside the root element.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="create" element={<CreatePollPage />} />
          <Route path="polls/:id" element={<PollPage />} />
          <Route path="polls/:id/results" element={<ResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);