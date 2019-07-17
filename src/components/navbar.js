import ResponsiveMenu from 'react-responsive-navbar';
import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

const Menu = styled.div`
  
  ul {
    padding: 1px;
    background-color: #937F7F
  }
  li {
    display: inline-block;
    font-size: 13px;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    color: black;
    &:hover {
      color: white;
      border-bottom: 1px solid
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

class Navbar extends React.Component {
  constructor() {
    super()
  }


  render(){
    return (
      <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="800px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <Menu>
          <ul>
            <li className="nav-item">
              <Link to="/movie" className={window.location.pathname === "/movie" ? "nav-link active" : "nav-link"}>
                Movie
              </Link>
            </li>
            <li className="nav-item">
                {/* haven't written the code for the page yet */}
              <Link
            to="/results"
            className={window.location.pathname === "/results" ? "nav-link active" : "nav-link"}
              >
                Snacks
              </Link>
            </li>
            <li className="nav-item">
                {/* haven't written the code for the page yet */}
              <Link
                to="/articles"
                className={window.location.pathname === "/articles" ? "nav-link active" : "nav-link"}
              >
                Profile
              </Link>
           </li>
           <li className="nav-item">
          <Link
            to="/about"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}  
            onClick={this.logout}
          >
            Logout
          </Link>
          </li>
          </ul>
          </Menu>
        }
        />  
    );
  }
}

export default Navbar;