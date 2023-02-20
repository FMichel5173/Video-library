import {
  Outlet,
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import DvdSheet from "./pages/DvdSheet";
import ConnexionPage from "./pages/ConnexionPage";
import NewAccountPage from "./pages/NewAccountPage";
import AdminProfile from "./pages/AdminProfile";
import DvdRegister from "./pages/DvdRegister";

import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<DvdSheet />} />
        <Route path="/connexionPage" element={<ConnexionPage />} />
        <Route path="/NewAccountPage" element={<NewAccountPage />} />
        <Route
          element={
            auth.isAuthenticated ? <Outlet /> : <Navigate to="/connexionPage" />
          }
        />
        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="/DvdRegister" element={<DvdRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
