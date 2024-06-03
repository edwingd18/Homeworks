import React, { useContext } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export function PrivateRoute({ children }) {
  const { state } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  return state.isLoggedIn
    ? children
    : <Navigate to="/login" state={{ from: location }} replace />;
}
