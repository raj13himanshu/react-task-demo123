import React from "react";
import { NavLink } from "react-router-dom";
import icon from "./images/back-icon.jpg";



const Navbar = () => {
  return (
    <>
      <div className="container-fluid navbar-custom ">
        <div className="row ">
          <div className="row ">
            <div className="col-12 ml-lg-n4">
              <h5 className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link "
                  to="/lesson"
                >
                  <img src={icon} alt="icon-img" className="icon" />
                  &nbsp; Class 6A - Maths -
                </NavLink>
              </h5>
            </div>
          </div>
          <div className="col-12 ">
            <nav className="navbar navbar-expand-lg ml-lg-n5   ">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-5 mb-0 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                        Overview
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/lesson"
                      >
                        Lesson Plan
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/assignment"
                      >
                        Assignment
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/test"
                      >
                        Test
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/resource"
                      >
                        Resources
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/report"
                      >
                        Reports
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
