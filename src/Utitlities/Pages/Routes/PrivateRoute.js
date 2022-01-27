import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <img
            className="w-32"
            src="https://i0.wp.com/www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
            alt="loader"
          />
        </div>
      </div>
    );
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
