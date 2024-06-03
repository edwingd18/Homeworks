import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { UserProvider } from "./UserProvider";
import { NavLink, useNavigate } from "react-router-dom";

function HomePage() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SET_LAST_VISITED_PAGE", payload: { page: "/" } });
  }, [dispatch]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      Welcome, {state.username}!
      <NavLink to="/login" onClick={handleLogout}>
        Logout
      </NavLink>
    </div>
  );
}

export default HomePage;
