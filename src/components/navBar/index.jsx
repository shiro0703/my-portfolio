import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./styles.scss";
import ThemeToggle from "../toggleButton/themeToggle";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={"/"} className="navbar-container-logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar-container-menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item) => (
            <li
              key={item.label}
              className={`navbar-container-menu-item ${
                location.pathname === item.to ? "active" : ""
              }`}
            >
              <Link
                onClick={handleToggleIcon}
                className="navbar-container-menu-item-links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
