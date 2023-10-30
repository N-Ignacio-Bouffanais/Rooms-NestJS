import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/root";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAppStore } from "./store/app";
import Footer from "./components/Footer";
import queryClient from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

//Students routes
const S_Login = lazy(() => import("./routes/student/auth/Login"));
const S_Register = lazy(() => import("./routes/student/auth/Register"));
const S_Dashboard = lazy(() => import("./routes/student/Dashboard"));
const MyNotes = lazy(() => import("./routes/student/MyNotes"));
const MySubjects = lazy(() => import("./routes/student/MySubjects"));
const SubjectsTake = lazy(() => import("./routes/student/SubjectsTake"));
const Subject = lazy(() => import("./routes/student/Subject"));

//Professor routes
const P_Dashboard = lazy(() => import("./routes/teacher/Dashboard"));
const P_Login = lazy(() => import("./routes/teacher/auth/Login"));
const P_Register = lazy(() => import("./routes/teacher/auth/Register"));
const P_MySubjects = lazy(() => import("./routes/teacher/MySubjects"));
const Subjects = lazy(() => import("./routes/teacher/SubjectsTake"));

const App = () => {
  const role = useAppStore((state) => state.role);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {role != "" && <Navbar redirectTo={`/${role}/panel-de-control`} />}
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/estudiante/login"
            element={
              <React.Suspense fallback={<>...</>}>
                <S_Login />
              </React.Suspense>
            }
          />
          <Route
            path="/estudiante/registro"
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
                redirectTo="/estudiante/login"
                isAllowed={role == "estudiante"}
              />
            }
          >
            <Route
              path="/estudiante/panel-de-control"
              element={
                <React.Suspense fallback={<>...</>}>
                  <S_Dashboard />
                </React.Suspense>
              }
            />
            <Route
              path="/estudiante/mis-notas"
              element={
                <React.Suspense fallback={<>...</>}>
                  <MyNotes />
                </React.Suspense>
              }
            />
            <Route
              path="/estudiante/toma-de-ramos/:estudiante"
              element={
                <React.Suspense fallback={<>...</>}>
                  <SubjectsTake />
                </React.Suspense>
              }
            />
            <Route
              path="/estudiante/mysubjects/:estudiante"
              element={
                <React.Suspense fallback={<>...</>}>
                  <MySubjects />
                </React.Suspense>
              }
            />
            <Route
              path="/estudiante/:id"
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
              path="/profesor/panel-de-control"
              element={
                <React.Suspense fallback={<>...</>}>
                  <P_Dashboard />
                </React.Suspense>
              }
            />
            <Route
              path="/profesor/toma-de-ramos/:profesor"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Subjects />
                </React.Suspense>
              }
            />
            <Route
              path="/profesor/mis-ramos/:profesor"
              element={
                <React.Suspense fallback={<>...</>}>
                  <P_MySubjects />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
