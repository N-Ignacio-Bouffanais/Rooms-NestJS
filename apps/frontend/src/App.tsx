import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/root";

const Students_Login = lazy(() => import("./routes/students/Login"));
const Professor_Login = lazy(() => import("./routes/professor/Login"));
const Professor_Register = lazy(() => import("./routes/professor/Register"));
const Students_Register = lazy(() => import("./routes/students/Register"));
const Dashboard = lazy(() => import("./routes/Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students/login" element={<Students_Login />} />
        <Route path="/students/register" element={<Students_Register />} />
        <Route path="/professor/login" element={<Professor_Login />} />
        <Route path="/professor/register" element={<Professor_Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
