import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

class NavBar extends Component {
  state = {
    links: [
      { name: "Home", url: "/", exact: true },
      { name: "Rooms", url: "/rooms" },
      { name: "Dine", url: "/dine" },
      { name: "Events", url: "/events" },
      { name: "Discover", url: "/discover" },
      { name: "Book Now", url: "/book" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-grey p-0 position-relative p-3 w-100">
          <a className="navbar-brand ml-5" href="#">
            <img src={logo} height="100" className="m-0 " />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ml-auto mr-5 navbar-right">
              {this.state.links.map(link => (
                <li className="nav-item" key={link.name}>
                  <NavLink
                    className="nav-link"
                    to={link.url}
                    exact={link.exact ? true : false}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
