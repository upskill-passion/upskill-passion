import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import { preload } from "swr";
import { getJobs, jobsUrlEndpoint } from "./api/jobsApi";
import { getBlogs, blogsUrlEndpoint } from "./api/blogsApi";

import { QueryContextProvider } from "./context/QueryContextProvider";
import { FilterdJobDataProvider } from "./context/FilterProvider";

preload(jobsUrlEndpoint, getJobs);
preload(blogsUrlEndpoint, getBlogs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QueryContextProvider>
          <FilterdJobDataProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </FilterdJobDataProvider>
        </QueryContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
