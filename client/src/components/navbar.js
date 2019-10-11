import ResponsiveMenu from 'react-responsive-navbar';
import React from "react";
import { Link, Redirect } from "react-router-dom";

import styled from 'styled-components';

const NavbarDropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
`;

const StyledNavbar = styled.div`
  
  ul {
    height: 50px;
    background-color: white;
    text-align: center;
    margin: 0px;
  }
  li {
    padding-top: 20px;
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
      color: gray;
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

const listItem = styled.li`
  position: relative;
  display: block;
  &:hover ${NavbarDropdown} {
    display: block;
  };
`;

class Navbar extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (

          <StyledNavbar>
          <ul>
          <listItem>
              <h1>
                Night In
              </h1>
              <NavbarDropdown>
                <Link to="/nightin" className={window.location.pathname === "/nightin" ? "nav-link active" : "nav-link"}>
                  Night In
                </Link>
              </NavbarDropdown>
          </listItem>
            <li className="nav-item">
                {/* haven't written the code for the page yet */}
              <Link
            to="/nightout"
            className={window.location.pathname === "/nightout" ? "nav-link active" : "nav-link"}
              >
                Night Out
              </Link>
            </li>
            <li className="nav-item">
                {/* haven't written the code for the page yet */}
              <Link
                to="/profile"
                className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
              >
                Profile
              </Link>
           </li>
        <li className="nav-item">
          <Link
            to="/signin"
            className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}  
            onClick={this.logout}
          >
            Logout
          </Link>
          </li>
          </ul>
          </StyledNavbar> 
    );
  }
}

export default Navbar;