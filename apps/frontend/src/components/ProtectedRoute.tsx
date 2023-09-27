import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAllowed: boolean;
  children?: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/login",
  children,
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
