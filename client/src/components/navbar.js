
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import styled from 'styled-components';

const Menu = styled.div`
  
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

const TopNavbar = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



    return (
      <div>
          <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                NightIn
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Search for Recipes
                </DropdownItem>
                <DropdownItem>
                  Search for Movies
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                NightOut
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  
                </DropdownItem>
                <DropdownItem>
                  Search for Showtimes
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <Link
                to="/profile"
                className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
              >
                Profile
              </Link>
            </NavItem>
            <NavItem>
            <Link
              to="/signin"
              className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}  
              //onClick={this.logout}
              >
                Logout
            </Link>
            </NavItem>
          {/* <ul>
          <li className="nav-item">
              <Link to="/nightin" className={window.location.pathname === "/nightin" ? "nav-link active" : "nav-link"}>
                Night In
              </Link>
          </li>
            <li className="nav-item">
              <Link
            to="/nightout"
            className={window.location.pathname === "/nightout" ? "nav-link active" : "nav-link"}
              >
                Night Out
              </Link>
            </li>
            <li className="nav-item">
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
          </ul> */}
          </Nav>
          </Collapse>
          </Navbar>
        </div>
        ) ;
  }

export default TopNavbar;