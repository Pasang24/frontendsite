import { Navigate, Outlet } from "react-router-dom";
import ForbiddenPage from "../pages/ForbiddenPage";

function ProtectedRoutes(props) {
  const role = localStorage.getItem("role");
  if (role) {
    if (props.role === role) {
      return <Outlet />;
    }
    return <ForbiddenPage />;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoutes;
