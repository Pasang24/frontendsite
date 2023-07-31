import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header-wrapper">
      <h2>
        <Link to="/">JobsPortal</Link>
      </h2>
      <div className="header-buttons">
        <Link to="/login">Login</Link>
        <Link to="/postjob">Post a Job</Link>
      </div>
    </header>
  );
}

export default Header;
