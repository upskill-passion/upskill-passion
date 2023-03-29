import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
