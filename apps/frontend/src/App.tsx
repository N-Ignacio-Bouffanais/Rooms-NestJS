import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./routes/Dashboard";
import Home from "./routes/root";
import Students_Login from "./routes/students/Login";
import Professor_Login from "./routes/professor/Login";
import Professor_Register from "./routes/professor/Register";
import Students_Register from "./routes/students/Register";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Landing />} />
        <Route path="/students/login" element={<Students_Login />} />
        <Route path="/students/register" element={<Students_Register />} />
        <Route path="/professor/login" element={<Professor_Login />} />
        <Route path="/professor/register" element={<Professor_Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
