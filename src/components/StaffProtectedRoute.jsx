import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const staff = JSON.parse(localStorage.getItem("staff"));

  if (!staff) {
    return <Navigate to="/login" />;
  }

  if (staff.role !== allowedRole) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;