import "./App.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <h2>DevLogo</h2>
      </div>

      <nav>

        <ul>

          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>

        </ul>

      </nav>

      <a href="/contact" className="contact-btn">
        Contact Me
      </a>

    </header>
  );
}

export default Header;