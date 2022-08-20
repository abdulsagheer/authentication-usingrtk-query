import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Auth from "./redux/services/Auth";
import Dashboard from "./redux/services/Dashboard";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
