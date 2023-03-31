import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import JobDescription from "./pages/JobDescription";
import Unauthorized from "./pages/Unauthorized";
import Missing from "./pages/Missing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Qna from "./pages/Qna";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="jobs">
          <Route index element={<HomePage />} />
          <Route path=":id" element={<JobDescription />} />
        </Route>
        <Route path="qna" element={<Qna />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
      {/* catch all essentially 404 page*/}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
