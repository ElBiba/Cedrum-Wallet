import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ComingSoon } from "./components/ComingSoon";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a1a]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
