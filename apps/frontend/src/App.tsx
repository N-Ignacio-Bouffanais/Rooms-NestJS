import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/root";

const Students_Login = lazy(() => import("./routes/Login"));
const Students_Register = lazy(() => import("./routes/Register"));
const Dashboard = lazy(() => import("./routes/Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<>...</>}>
              <Students_Login />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={<>...</>}>
              <Students_Register />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
