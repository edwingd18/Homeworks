import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavComponent() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={(args) => `${args.isActive ? "active" : null }`} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={(args) => `${args.isActive ? "active" : null }`} to="/experience">Experiencia</NavLink>
        </li>
        <li>
          <NavLink className={(args) => `${args.isActive ? "active" : null }`} to="/portfolio">Portafolio</NavLink>
        </li>
        <li>
          <NavLink className={(args) => `${args.isActive ? "active" : null }`} to="/about-me">Sobre mí</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavComponent;
