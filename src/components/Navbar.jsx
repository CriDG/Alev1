import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    // Cambia le variabili della `:root`
    const root = document.documentElement;
    if (!darkMode) {
      root.style.setProperty("--text-color", "#ffffff");
      root.style.setProperty("--bg-color", "#242424");
      root.style.setProperty("--button-bg", "#1a1a1a");
    } else {
      root.style.setProperty("--text-color", "#213547");
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--button-bg", "#f9f9f9");
    }
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
          background: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/diversi">Mix</Link>
        <Link to="/famiglia">Famiglia</Link>
        <Link to="/feste">Feste</Link>
        <Link to="/registrati">Registrati</Link>

        {/* Bottone cambio tema */}
        <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
        </button>
      </nav>
    </>
  );
}

