import React, { useEffect, useReducer } from "react";
import NavComponent from "./components/NavComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
function App() {
  
  return (
    <>
      <NavComponent></NavComponent>
      <Routes >
        <Route path="/" element={<Home/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/about-me" element={<AboutMe/>}></Route>
      </Routes>
    </>
  );
}

export default App;
