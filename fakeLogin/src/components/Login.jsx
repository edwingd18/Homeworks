import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");

    if (username.trim() !== "") {
      dispatch({ type: "LOGIN", payload: { username } });
      navigate("/");
    } else{
        alert("Campo de username vacio")
    }
  };

  return (
    <main>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username..."
        />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default Login;
