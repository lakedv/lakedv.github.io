import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3 flex-column justify-content-start">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/">
            <FontAwesomeIcon icon={faHouseUser} size="3x" />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/Projects">
            <FontAwesomeIcon icon={faFolderOpen} size="3x" />
            <span activeClassName="active" className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/About">
            <FontAwesomeIcon icon={faAddressCard} size="3x" />
            <span className="link-text">About me</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/Contact">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
            <span className="link-text">Contact me</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
