import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/root";

const Students_Login = lazy(() => import("./routes/students/Login"));
const Professor_Login = lazy(() => import("./routes/professor/Login"));
const Professor_Register = lazy(() => import("./routes/professor/Register"));
const Students_Register = lazy(() => import("./routes/students/Register"));
const Dashboard = lazy(() => import("./routes/students/Dashboard"));
const Pr_Dashboard = lazy(() => import("./routes/professor/Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/students/dashboard"
          element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="/professor/dashboard"
          element={
            <React.Suspense fallback={<>...</>}>
              <Pr_Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="/students/login"
          element={
            <React.Suspense fallback={<>...</>}>
              <Students_Login />
            </React.Suspense>
          }
        />
        <Route
          path="/students/register"
          element={
            <React.Suspense fallback={<>...</>}>
              <Students_Register />
            </React.Suspense>
          }
        />
        <Route
          path="/professor/login"
          element={
            <React.Suspense fallback={<>...</>}>
              <Professor_Login />
            </React.Suspense>
          }
        />
        <Route
          path="/professor/register"
          element={
            <React.Suspense fallback={<>...</>}>
              <Professor_Register />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
