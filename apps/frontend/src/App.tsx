import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/root";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuthStore } from "./store/auth";

const Login = lazy(() => import("./routes/auth/Login"));
const Register = lazy(() => import("./routes/auth/Register"));
const Dashboard = lazy(() => import("./routes/Dashboard"));
const MyNotes = lazy(() => import("./routes/student/MyNotes"));
const MySubjects = lazy(() => import("./routes/student/MySubjects"));
const MyStudents = lazy(() => import("./routes/teacher/MyStudents"));

//Dynamic route
const Subject = lazy(() => import("./routes/student/Subject"));

const App = () => {

  const user = useAuthStore.getState().username;
  const rol = useAuthStore.getState().rol;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/login"
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
        <Route index element={<Home />} />
        <Route
          element={<ProtectedRoute isAllowed={!!user && rol === "student"} />}
        >
          <Route
            path="/panel-de-control"
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
            path="/alumno/mis-ramos"
            element={
              <React.Suspense fallback={<>...</>}>
                <MySubjects />
              </React.Suspense>
            }
          />
          <Route
            path="/alumno/mis-ramos/:id"
            element={
              <React.Suspense fallback={<>...</>}>
                <Subject />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          element={<ProtectedRoute isAllowed={!!user && rol === "teacher"} />}
        >
          <Route
            path="/profesor/mis-alumnos"
            element={
              <React.Suspense fallback={<>...</>}>
                <MyStudents />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
