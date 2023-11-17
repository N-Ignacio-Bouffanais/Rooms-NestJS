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
const P_Subject = lazy(() => import("./routes/teacher/Subject"));

const App = () => {
  const role = useAppStore((state) => state.role);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {role != "" && <Navbar redirectTo={`/${role}/dashboard`} />}
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/student/login"
            element={
              <React.Suspense fallback={<>...</>}>
                <S_Login />
              </React.Suspense>
            }
          />
          <Route
            path="/student/register"
            element={
              <React.Suspense fallback={<>...</>}>
                <S_Register />
              </React.Suspense>
            }
          />
          <Route
            path="/professor/login"
            element={
              <React.Suspense fallback={<>...</>}>
                <P_Login />
              </React.Suspense>
            }
          />
          <Route
            path="/professor/register"
            element={
              <React.Suspense fallback={<>...</>}>
                <P_Register />
              </React.Suspense>
            }
          />
          <Route
            element={
              <ProtectedRoute
                redirectTo="/student/login"
                isAllowed={role == "student"}
              />
            }
          >
            <Route
              path="/student/dashboard"
              element={
                <React.Suspense fallback={<>...</>}>
                  <S_Dashboard />
                </React.Suspense>
              }
            />
            <Route
              path="/student/my-subjects"
              element={
                <React.Suspense fallback={<>...</>}>
                  <MyNotes />
                </React.Suspense>
              }
            />
            <Route
              path="/student/subjects-take/:student"
              element={
                <React.Suspense fallback={<>...</>}>
                  <SubjectsTake />
                </React.Suspense>
              }
            />
            <Route
              path="/student/mysubjects/:student"
              element={
                <React.Suspense fallback={<>...</>}>
                  <MySubjects />
                </React.Suspense>
              }
            />
            <Route
              path="/student/:classId"
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
                redirectTo="/professor/login"
                isAllowed={role == "professor"}
              />
            }
          >
            <Route
              path="/professor/dashboard"
              element={
                <React.Suspense fallback={<>...</>}>
                  <P_Dashboard />
                </React.Suspense>
              }
            />
            <Route
              path="/professor/subjects-take/:professor"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Subjects />
                </React.Suspense>
              }
            />
            <Route
              path="/professor/:classId"
              element={
                <React.Suspense fallback={<>...</>}>
                  <P_Subject />
                </React.Suspense>
              }
            />
            <Route
              path="/professor/mysubjects/:professor"
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
