import React, { Component } from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className="stickyheader">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to='/'>Header</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active2" to='/comp1'>Component-1</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active2" to='/comp2'>Component-2</NavLink>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Component-3
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" activeClassName="active" to="/comp3/New">New</NavLink>
                  <NavLink className="dropdown-item" activeClassName="active" to="/comp3/Edit">Edit</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item" activeClassName="active" to="/comp3/Close">Close</NavLink>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 searchInput" placeholder="Search" aria-label="Search"></input>
              <i className="fa fa-search searchIcon"></i>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
