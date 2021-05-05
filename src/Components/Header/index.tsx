import React from "react";
import { NavLink as Link } from "react-router-dom";
import styles from "./header.module.css";
interface Props {}

type NAV_LINK = {
  url: string;
  text: string;
};
const LINKS: NAV_LINK[] = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/submit-leads",
    text: "Submit Leads",
  },
  {
    url: "/disclaimer",
    text: "Disclaimer",
  },
];

const Header = (props: Props) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CovidRakshak
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {LINKS.map((navlink, index) => (
              <Link
                key={index}
                to={navlink.url}
                activeClassName="nav-link active"
                className="nav-link"
              >
                {navlink.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
