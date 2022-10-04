import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const PrivateRoute = () => {
  const location = useLocation();
  const { currentUser } = useAuth();
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ path: location.pathname }} />
  );
};
export default PrivateRoute;
