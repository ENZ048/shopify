import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClipLoader size={50} color="#4fa94d" />
      </div>
    );
  }

  return user ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
