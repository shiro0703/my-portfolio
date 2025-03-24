import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./themeToggle.scss"; // Import the CSS

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // <label className="toggle-switch">
    //   <input
    //     type="checkbox"
    //     checked={theme === "light"}
    //     onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    //   />
    //   <span className="slider">
    //     {theme === "dark" ? (
    //       <FaMoon className="icon moon" />
    //     ) : (
    //       <FaSun className="icon sun" />
    //     )}
    //   </span>
    // </label>
    <button
      className="dark-mode-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <FaMoon className="icon moon" />
      ) : (
        <FaSun className="icon sun" />
      )}
    </button>
  );
};

export default ThemeToggle;
