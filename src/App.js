import Login from "./component/Login";
import Dashboard from "./component/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from './component/Profile/EditProfile'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<EditProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
