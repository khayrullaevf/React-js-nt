 
import {NavLink} from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    <nav className="container">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/team" className="nav-link">
            Team
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" className="nav-link">
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="auth/login" className="nav-link">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="auth/register" className="nav-link">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header