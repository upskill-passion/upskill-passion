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
import BlogsPage from "./pages/BlogsPage";
import RequireAuth from "./components/RequireAuth";
import CreateBlog from "./pages/CreateBlog";
import BlogDescription from "./pages/BlogDescription";

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
          element={<RequireAuth allowedRoles={["GeneralUser", "Recruiter"]} />}
        >
          <Route path="blogs">
            <Route index element={<BlogsPage />} />
            <Route path=":blogId" element={<BlogDescription />} />
          </Route>
          <Route path="createBlog" element={<CreateBlog />} />
          <Route path="qna" element={<Qna />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["GeneralUser"]} />}>
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
