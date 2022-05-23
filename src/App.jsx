import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CameraPage from "./Components/CameraPage";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
