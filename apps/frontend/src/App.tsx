import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/root";
import { ProtectedRoute } from "./components/ProtectedRoute";

const Login = lazy(() => import("./routes/Login"));
const Register = lazy(() => import("./routes/Register"));
const Dashboard = lazy(() => import("./routes/Dashboard"));
const MyNotes = lazy(() => import("./routes/student/MyNotes"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/alumno/panel-de-control"
          element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="/alumno/mis-notas"
          element={
            <React.Suspense fallback={<>...</>}>
              <MyNotes />
            </React.Suspense>
          }
        />
        <Route
          path="/ingreso"
          element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/registro"
          element={
            <React.Suspense fallback={<>...</>}>
              <Register />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
