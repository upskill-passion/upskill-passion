import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import JobDescription from "./pages/JobDescription";
import Unauthorized from "./pages/Unauthorized";
import Missing from "./pages/Missing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Qna from "./pages/Qna";
import Blogs from "./pages/Blogs";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public Routes*/}
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route
          element={
            <RequireAuth
              allowedRoles={["General User", "Volunteer", "Recruiter"]}
            />
          }
        >
          <Route path="blogs" element={<Blogs />} />
          <Route path="qna" element={<Qna />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={["Volunteer", "General User"]} />}
        >
          <Route path="jobs">
            <Route index element={<JobPage />} />
            <Route path=":jobId" element={<JobDescription />} />
          </Route>
        </Route>

        {/* <Route element={<RequireAuth allowedRoles={["Recruiter"]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={["Recruiter", "Volunteer"]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route> */}
      </Route>

      {/* catch all essentially 404 page*/}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
