import "./App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <Link to="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0655/9501/5247/files/sz_sky-removebg-preview.png?v=1785085275"
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