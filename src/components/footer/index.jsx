import "./styles.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} Siow Wei Jun. All Rights Reserved.
        </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/wei-jun-b425481a1">
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/shiro0703"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
