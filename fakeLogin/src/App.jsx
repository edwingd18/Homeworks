import React, { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./components/UserProvider";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import HomePage from "./components/HomePage";

function App() {
  
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
