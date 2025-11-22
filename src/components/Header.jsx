import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {


  const handleFormSubmit = (e) => {
    e.preventDefault()
   
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid container">
          <h4>
            <Link className="navbar-brand" to="/">
              Meetup
            </Link>
          </h4>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/add">
                  Add Event
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => onSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
