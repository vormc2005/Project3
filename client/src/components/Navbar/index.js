import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" 
                  ? "nav-link active"
                  : "nav-link"
              }
            >
             Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/bid"
              className={window.location.pathname === "/bid" ? "nav-link active" : "nav-link"}
            >
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/post"
              className={window.location.pathname === "/post" ? "nav-link active" : "nav-link"}
            >
            Post an item
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
