import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DvdSheet from "./pages/DvdSheet";
import ConnexionPage from "./pages/ConnexionPage";
import NewAccountPage from "./pages/NewAccountPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<DvdSheet />} />
        <Route path="/connexion" element={<ConnexionPage />} />
        <Route path="/NewAccountPage" element={<NewAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
