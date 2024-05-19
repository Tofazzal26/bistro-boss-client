import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, notLoading } = useContext(AuthContext);

  if (notLoading) {
    return (
      <div className=" flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRouter;
