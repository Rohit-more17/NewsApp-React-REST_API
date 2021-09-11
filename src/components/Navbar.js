import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container-fluid  ">
            <Link className="navbar-brand text-white" to="/">
              News App
            </Link>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link className="nav-link text-white" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-dark dropdown-toggle "
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Catagories
                      </button>

                      <ul
                        className="dropdown-menu bg-dark text-light"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link className="dropdown-item text-light" to="/">
                            General
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-light "
                            to="/business"
                          >
                            Buisness
                          </Link>
                        </li>
                       
                        <li>
                          <Link
                            className="dropdown-item text-light"
                            to="/sports"
                          >
                            Sports
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-light"
                            to="/entertainment"
                          >
                            Entertainment
                          </Link>
                        </li>
                        
                        <li>
                          <Link
                            className="dropdown-item text-light"
                            to="/technology"
                          >
                            Technology
                          </Link>
                        </li>
                       
                      
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>

              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success text-white"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
