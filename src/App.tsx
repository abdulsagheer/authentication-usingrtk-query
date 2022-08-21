import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/auth">
          <button>Auth</button>
        </Link>
        <Link to="/dashboard">
          <button >Dashboard</button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
