import "./App.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="SZ Sky Logo"
            className="logo-img"
          />
        </Link>
      </div>

      <nav>

        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>
           <li>
            <Link to="/projects">Projects</Link>
          </li>
      
              <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/guest-posting">Guest Posting</Link>
          </li>
        </ul>

      </nav>

      <Link to="/contact" className="contact-btn">
        Contact Me
      </Link>

    </header>
  );
}

export default Header;