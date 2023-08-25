import React from "react";
import { Link } from "react-router-dom";
import { BiLogoReact } from "react-icons/bi";
const Header = () => {
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span style={{ fontSize: "1.9rem", marginRight: "10px" }}>
            <BiLogoReact />
          </span>
          <b>React App</b>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Counter">
              Counter
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Userlist">
              Userlist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Todo">
              TODO
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
