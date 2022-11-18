import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from './component/Profile/EditProfile'
import EmployerDashboarde from "./component/Dashboard/EmployerDashboarde";
import HomePage from "./pages/Home/HomePage";
import AddProject from "./pages/Project/AddProject";
import Login from "./component/Auth/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login/>} />
            <Route path="/home" exact element={<HomePage />} />
            <Route path="/project/add" exact element={<AddProject />}/>
            <Route path="/dashboard" element={<EmployerDashboarde />}/>
            <Route path="/profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
