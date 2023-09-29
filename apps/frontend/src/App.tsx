import React, { lazy } from "react";
import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/root";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuthStore } from "./store/auth";

//Students routes
const S_Login = lazy(() => import("./routes/student/auth/Login"));
const S_Register = lazy(() => import("./routes/student/auth/Register"));
const S_Dashboard = lazy(() => import("./routes/student/Dashboard"));
const MyNotes = lazy(() => import("./routes/student/MyNotes"));
const MySubjects = lazy(() => import("./routes/student/MySubjects"));

//Professor routes
const MyStudents = lazy(() => import("./routes/teacher/MyStudents"));
const P_Dashboard = lazy(() => import("./routes/teacher/Dashboard"));
const P_Login = lazy(() => import("./routes/teacher/auth/Login"));
const P_Register = lazy(() => import("./routes/teacher/auth/Register"));

//Dynamic route
const Subject = lazy(() => import("./routes/student/Subject"));

const App = () => {

  const role = useAuthStore((state)=> state.role)

  return (
    <BrowserRouter>
      {role != ""  && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/estudiantes/login"
          element={
            <React.Suspense fallback={<>...</>}>
              <S_Login />
            </React.Suspense>
          }
        />
        <Route
          path="/estudiantes/registro"
          element={
            <React.Suspense fallback={<>...</>}>
              <S_Register />
            </React.Suspense>
          }
        />
        <Route
          path="/profesor/login"
          element={
            <React.Suspense fallback={<>...</>}>
              <P_Login />
            </React.Suspense>
          }
        />
        <Route
          path="/profesor/registro"
          element={
            <React.Suspense fallback={<>...</>}>
              <P_Register />
            </React.Suspense>
          }
        />
        <Route
          element={
            <ProtectedRoute
              redirectTo="/estudiantes/login"
              isAllowed={role == "estudiante"}
            />
          }
        >
          <Route
            path="/alumno/panel-de-control"
            element={
              <React.Suspense fallback={<>...</>}>
                <S_Dashboard />
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
          element={
            <ProtectedRoute
              redirectTo="/profesor/login"
              isAllowed={role == "profesor"}
            />
          }
        >
          <Route
            path="/profesor/mis-alumnos"
            element={
              <React.Suspense fallback={<>...</>}>
                <MyStudents />
              </React.Suspense>
            }
          />
          <Route
            path="/profesor/panel-de-control"
            element={
              <React.Suspense fallback={<>...</>}>
                <P_Dashboard />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
};

export default App;
