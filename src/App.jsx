import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/James-Attia-Portfolio" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
