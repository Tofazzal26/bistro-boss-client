import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivate = ({ children }) => {
  const { notLoading, user } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();

  if (notLoading || isLoading) {
    return (
      <div className=" flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivate;
